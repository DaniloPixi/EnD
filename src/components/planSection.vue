<template>
  <div class="page-container">
    <Sidebar />
    <section class="sectionContainer planSectionContainer">
      <h2>Our Plans</h2>
      <button
        v-if="!showNewPlanForm"
        @click="showNewPlanForm = true"
        class="newPlanButton"
      >
        + New Plan
      </button>

      <div v-if="showNewPlanForm" class="planInputForm">
        <h3>Add a New Plan</h3>
        <div class="planInput">
          <textarea v-model="newPlanText" placeholder="Write a new plan..."></textarea>
        </div>
        <div class="hashtagSelector">
          <h4>Add Hashtags (max {{ maxHashtagsPerItem }}):</h4>
          <div class="hashtagButtons">
            <HashtagButton
              v-for="tag in availableHashtags"
              :key="tag"
              :tag="tag"
              :isSelected="selectedNewPlanHashtags.includes(tag)"
              :isDisabled="
                selectedNewPlanHashtags.length >= maxHashtagsPerItem &&
                !selectedNewPlanHashtags.includes(tag)
              "
              @click="toggleHashtag(tag, 'new')"
            />
          </div>
        </div>
        <div class="planFormActions">
          <button @click="addPlan">Add Plan</button>
          <button @click="cancelNewPlan" class="cancelButton">Cancel</button>
        </div>
      </div>

      <div class="planList">
        <h3>Existing Plans:</h3>
        <ul v-if="filteredPlans.length">
          <li
            v-for="plan in filteredPlans"
            :key="plan.id"
            :class="{
              editing: editingPlanId === plan.id,
              'plan-completed': plan.completed,
            }"
          >
            <div v-if="editingPlanId !== plan.id" class="planDisplayMode">
              <p>{{ plan.text }}</p>
              <div class="planMeta">
                <small>{{ formatDate(plan.createdAt) }}</small>
                <span class="planCreator">
                  by {{ userNicknames[plan.creatorId] || "..." }}
                </span>
                <span v-for="tag in plan.hashtags" :key="tag" class="planTag">
                  #{{ tag }}
                </span>
              </div>
              <div class="planActions">
                <button
                  v-if="plan.creatorId === currentUserId"
                  @click="togglePlanCompletion(plan.id, !plan.completed)"
                  class="completeButton"
                >
                  {{ plan.completed ? "Uncomplete" : "Complete" }}
                </button>
                <button
                  v-if="plan.creatorId === currentUserId"
                  @click="startEdit(plan)"
                  class="editButton"
                >
                  Edit
                </button>
                <button
                  v-if="plan.creatorId === currentUserId"
                  @click="deletePlan(plan.id)"
                  class="deleteButton"
                >
                  Delete
                </button>
              </div>
            </div>
            <div v-else class="planEditMode">
              <textarea v-model="editedPlanText" class="editTextarea"></textarea>
              <div class="hashtagSelector">
                <h4>Edit Hashtags (max {{ maxHashtagsPerItem }}):</h4>
                <div class="hashtagButtons">
                  <HashtagButton
                    v-for="tag in availableHashtags"
                    :key="tag"
                    :tag="tag"
                    :isSelected="selectedEditedPlanHashtags.includes(tag)"
                    :isDisabled="
                      selectedEditedPlanHashtags.length >= maxHashtagsPerItem &&
                      !selectedEditedPlanHashtags.includes(tag)
                    "
                    @click="toggleHashtag(tag, 'edit')"
                  />
                </div>
              </div>
              <div class="planEditActions">
                <button @click="saveEditedPlan(plan.id)" class="saveButton">Save</button>
                <button @click="cancelEdit()" class="cancelButton">Cancel</button>
              </div>
            </div>
          </li>
        </ul>
        <p v-else>No plans yet! Be the first to add one by clicking "New Plan".</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watchEffect, watch } from "vue";
import { db, auth } from "../firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  where,
  Timestamp,
  getDocs,
} from "firebase/firestore";
import { formatDate } from "../utils/formatDate";
import HashtagButton from "./shared/hashtagButton.vue";
import Sidebar from "./sidebar.vue";
import { useStore } from "../useStore";

const store = useStore();

const SHARED_SPACE_ID = "our_cozy_shared_space_alpha";
const currentUserId = ref(null);

const plans = ref([]);
const userNicknames = ref({});
let unsubscribePlans = null;

const newPlanText = ref("");
const editingPlanId = ref(null);
const editedPlanText = ref("");
const showNewPlanForm = ref(false);

const availableHashtags = ref([
  "Family",
  "Friends",
  "Travel",
  "Event",
  "Work",
  "Home",
  "Food",
  "Fun",
  "Important",
  "Reminder",
]);
const maxHashtagsPerItem = 4;
const selectedNewPlanHashtags = ref([]);
const selectedEditedPlanHashtags = ref([]);

const toggleHashtag = (tag, type) => {
  let targetArray =
    type === "new" ? selectedNewPlanHashtags.value : selectedEditedPlanHashtags.value;
  const index = targetArray.indexOf(tag);

  if (index > -1) {
    targetArray.splice(index, 1);
  } else {
    if (targetArray.length < maxHashtagsPerItem) {
      targetArray.push(tag);
    } else {
      alert(`You can select a maximum of ${maxHashtagsPerItem} hashtags.`);
    }
  }
};

const addPlan = async () => {
  if (newPlanText.value.trim() === "") {
    alert("Plan text is required!");
    return;
  }
  if (!auth.currentUser) {
    alert("You must be logged in to add a plan.");
    return;
  }
  try {
    await addDoc(collection(db, "plans"), {
      text: newPlanText.value,
      createdAt: new Date(),
      creatorId: auth.currentUser.uid,
      sharedSpaceId: SHARED_SPACE_ID,
      hashtags: selectedNewPlanHashtags.value,
      completed: false,
    });
    newPlanText.value = "";
    selectedNewPlanHashtags.value = [];
    showNewPlanForm.value = false;
  } catch (e) {
    console.error("Error adding document to Firestore: ", e);
    alert("Failed to add plan. Check console for details.");
  }
};

const cancelNewPlan = () => {
  newPlanText.value = "";
  selectedNewPlanHashtags.value = [];
  showNewPlanForm.value = false;
};

const startEdit = (plan) => {
  editingPlanId.value = plan.id;
  editedPlanText.value = plan.text;
  selectedEditedPlanHashtags.value = plan.hashtags ? [...plan.hashtags] : [];
};

const saveEditedPlan = async (planId) => {
  if (editedPlanText.value.trim() === "") {
    alert("Edited plan text is required!");
    return;
  }
  if (!auth.currentUser) {
    alert("You must be logged in to edit a plan.");
    return;
  }
  try {
    const planRef = doc(db, "plans", planId);
    await updateDoc(planRef, {
      text: editedPlanText.value,
      hashtags: selectedEditedPlanHashtags.value,
      // CRITICAL FIX: The line below was added to correctly update the creatorId.
      creatorId: auth.currentUser.uid,
    });
    cancelEdit();
  } catch (e) {
    console.error("Error updating plan: ", e);
    alert("Failed to update plan. Check console for details.");
  }
};

const cancelEdit = () => {
  editingPlanId.value = null;
  editedPlanText.value = "";
  selectedEditedPlanHashtags.value = [];
};

const togglePlanCompletion = async (id, completedStatus) => {
  const planRef = doc(db, "plans", id);
  try {
    await updateDoc(planRef, {
      completed: completedStatus,
    });
  } catch (e) {
    console.error("Error updating plan completion: ", e);
    alert("Failed to update plan. Check console for details.");
  }
};

const deletePlan = async (id) => {
  if (!auth.currentUser) {
    alert("You must be logged in to delete a plan.");
    return;
  }

  if (confirm("Are you sure you want to delete this plan?")) {
    const planRef = doc(db, "plans", id);
    try {
      await deleteDoc(planRef);
    } catch (e) {
      console.error("Error deleting plan: ", e);
      alert("Failed to delete plan. Check console for details.");
    }
  }
};

const getStartOfDay = (date) => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
};

const getEndOfDay = (date) => {
  const d = new Date(date);
  d.setHours(23, 59, 59, 999);
  return d;
};

const setupPlansListener = (filters, userId) => {
  if (unsubscribePlans) {
    unsubscribePlans();
  }

  if (!userId) {
    plans.value = [];
    return;
  }

  let plansQuery = query(
    collection(db, "plans"),
    where("sharedSpaceId", "==", SHARED_SPACE_ID)
  );

  if (filters.hashtags && filters.hashtags.length > 0) {
    plansQuery = query(
      plansQuery,
      where("hashtags", "array-contains-any", filters.hashtags)
    );
  }

  const { dateRange, date: specificDate } = filters;
  let startDate = null;
  let endDate = null;

  if (dateRange === "today") {
    startDate = getStartOfDay(new Date());
    endDate = getEndOfDay(new Date());
  } else if (dateRange === "last7days") {
    const d = new Date();
    startDate = getStartOfDay(new Date(d.setDate(d.getDate() - 6)));
    endDate = getEndOfDay(new Date());
  } else if (dateRange === "last30days") {
    const d = new Date();
    startDate = getStartOfDay(new Date(d.setDate(d.getDate() - 29)));
    endDate = getEndOfDay(new Date());
  } else if (dateRange === "specific" && specificDate) {
    const selectedDateTime = new Date(specificDate);
    startDate = getStartOfDay(selectedDateTime);
    endDate = getEndOfDay(selectedDateTime);
  }

  if (startDate && endDate) {
    plansQuery = query(
      plansQuery,
      where("createdAt", ">=", Timestamp.fromDate(startDate)),
      where("createdAt", "<=", Timestamp.fromDate(endDate))
    );
  }

  plansQuery = query(plansQuery, orderBy("createdAt", "desc"));

  unsubscribePlans = onSnapshot(
    plansQuery,
    (querySnapshot) => {
      const livePlans = [];
      querySnapshot.forEach((doc) => {
        const planData = doc.data();
        livePlans.push({ id: doc.id, ...planData, hashtags: planData.hashtags || [] });
      });
      plans.value = livePlans;
    },
    (error) => {
      console.error("Error listening to plans: ", error);
      alert("Failed to load plans. Check console for details.");
    }
  );
};

const fetchUserNicknames = async () => {
  const creatorIdsToFetch = new Set();
  plans.value.forEach((plan) => {
    if (plan.creatorId && !userNicknames.value[plan.creatorId]) {
      creatorIdsToFetch.add(plan.creatorId);
    }
  });

  if (creatorIdsToFetch.size === 0) {
    return;
  }

  try {
    const userDocsPromises = Array.from(creatorIdsToFetch).map((uid) =>
      getDocs(query(collection(db, "users"), where("__name__", "==", uid)))
    );
    const snapshots = await Promise.all(userDocsPromises);

    snapshots.forEach((snapshot) => {
      snapshot.forEach((doc) => {
        const userProfile = doc.data();
        userNicknames.value[doc.id] = userProfile.nickname;
      });
    });
  } catch (error) {
    console.error("Error fetching user nicknames:", error);
  }
};

watch(plans, fetchUserNicknames);

// WATCH FOR CHANGES TO THE GLOBAL FILTER SETTINGS
watchEffect(() => {
  const filters = store.state.filterSettings;
  const user = auth.currentUser;
  if (user) {
    currentUserId.value = user.uid;
    setupPlansListener(filters, user.uid);
  } else {
    currentUserId.value = null;
    if (unsubscribePlans) {
      unsubscribePlans();
    }
    plans.value = [];
  }
});

onUnmounted(() => {
  if (unsubscribePlans) {
    unsubscribePlans();
  }
});

// A computed property to reactively filter the plans array
const filteredPlans = computed(() => {
  const filters = store.state.filterSettings;
  if (filters.hashtags.length === 0) {
    return plans.value;
  }
  return plans.value.filter((plan) => {
    return filters.hashtags.every((tag) => plan.hashtags.includes(tag));
  });
});
</script>

<style scoped>
/*
  The CSS has been refactored to use our new global CSS variables.
  This makes the styling more consistent and easier to update.
*/
.page-container {
  display: flex;
  flex-grow: 1;
}

.sectionContainer {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 0;
  padding: 0 var(--space-lg);
  box-sizing: border-box;
}

h2,
h3 {
  color: var(--color-primary);
}

.newPlanButton {
  padding: var(--space-md) var(--space-lg);
  background-color: var(--color-primary);
  color: var(--color-text-dark);
  border: none;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  font-size: var(--font-size-md);
  font-weight: bold;
  margin-bottom: var(--space-lg);
  transition: background-color 0.2s, transform 0.2s;
  align-self: flex-start;
}

.newPlanButton:hover {
  background-color: var(--color-primary-hover);
  transform: translateY(-2px);
}

.planInputForm {
  background-color: var(--color-background-form);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--border-radius-md);
  padding: var(--space-lg);
  margin-bottom: 30px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.planInput {
  margin-bottom: var(--space-md);
}

.planInput textarea {
  width: 100%;
  padding: var(--space-sm);
  border: 1px solid var(--color-secondary);
  border-radius: var(--border-radius-sm);
  min-height: 80px;
  resize: vertical;
  box-sizing: border-box;
  background-color: var(--color-secondary);
  color: var(--color-text-light);
}
.planInput textarea::placeholder {
  color: var(--color-text-muted);
}

.planFormActions {
  display: flex;
  justify-content: flex-end;
  gap: var(--space-sm);
  margin-top: var(--space-md);
}

.planFormActions button {
  padding: var(--space-sm) var(--space-md);
  border: none;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  font-size: var(--font-size-sm);
  transition: background-color 0.2s, color 0.2s;
}

.planFormActions button:first-child {
  background-color: var(--color-primary);
  color: var(--color-text-dark);
}

.planFormActions button:first-child:hover {
  background-color: var(--color-primary-hover);
}

.planFormActions .cancelButton {
  background-color: var(--color-secondary);
  color: var(--color-text-light);
}

.planFormActions .cancelButton:hover {
  background-color: var(--color-secondary-hover);
}

.planList {
  width: 100%;
  margin-top: var(--space-lg);
}

.planList ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-md);
}

.planList li {
  background-color: var(--color-background-card);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--border-radius-md);
  padding: var(--space-md);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  display: flex;
  flex-direction: column;
}

.planList li:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
}

.planList li.editing {
  border-color: var(--color-primary);
}

.planDisplayMode {
  color: var(--color-text-light);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.planDisplayMode p {
  margin: 0 0 var(--space-sm) 0;
  flex-grow: 1;
}

.planMeta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-sm);
  color: var(--color-text-muted);
  font-size: var(--font-size-sm);
  margin-top: var(--space-sm);
}

.planCreator {
  font-weight: bold;
  color: var(--color-primary);
  font-style: italic;
  font-size: 1em;
}

.planMeta small {
  background-color: rgba(64, 224, 208, 0.2);
  padding: 3px 8px;
  border-radius: var(--border-radius-sm);
  color: var(--color-primary);
}

.planTag {
  background-color: var(--color-accent-green);
  color: var(--color-text-light);
  padding: 3px 8px;
  border-radius: var(--border-radius-sm);
  font-size: 0.8em;
  white-space: nowrap;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.planActions {
  display: flex;
  justify-content: flex-end;
  gap: var(--space-sm);
  margin-top: var(--space-sm);
}

.planActions button {
  padding: var(--space-sm) var(--space-md);
  border: none;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  font-size: var(--font-size-sm);
  transition: background-color 0.2s, transform 0.2s;
}

.editButton {
  background-color: var(--color-primary);
  color: var(--color-text-dark);
}

.editButton:hover {
  background-color: var(--color-primary-hover);
  transform: translateY(-1px);
}

.deleteButton {
  background-color: var(--color-danger);
  color: var(--color-text-light);
}

.deleteButton:hover {
  background-color: var(--color-danger-hover);
  transform: translateY(-1px);
}

.completeButton {
  background-color: #4caf50;
  color: var(--color-text-light);
}

.completeButton:hover {
  background-color: #45a049;
}

.planEditMode {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.planEditMode .editTextarea {
  width: 100%;
  padding: var(--space-sm);
  border: 1px solid var(--color-primary);
  border-radius: var(--border-radius-sm);
  min-height: 80px;
  resize: vertical;
  box-sizing: border-box;
  background-color: var(--color-secondary);
  color: var(--color-text-light);
}
.planEditMode .editTextarea::placeholder {
  color: var(--color-text-muted);
}

.planEditActions {
  display: flex;
  justify-content: flex-end;
  gap: var(--space-sm);
  margin-top: var(--space-sm);
}

.planEditActions button {
  padding: var(--space-sm) var(--space-md);
  border: none;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  font-size: var(--font-size-sm);
  transition: background-color 0.2s, color 0.2s;
}

.saveButton {
  background-color: var(--color-primary);
  color: var(--color-text-dark);
}

.saveButton:hover {
  background-color: var(--color-primary-hover);
}

.planEditActions .cancelButton {
  background-color: var(--color-secondary);
  color: var(--color-text-light);
}

.planEditActions .cancelButton:hover {
  background-color: var(--color-secondary-hover);
}

.hashtagSelector {
  margin-top: var(--space-md);
  margin-bottom: var(--space-md);
  padding: var(--space-sm);
  background-color: #333333;
  border-radius: var(--border-radius-sm);
  border: 1px solid #444444;
}

.hashtagSelector h4 {
  margin-top: 0;
  margin-bottom: var(--space-sm);
  color: var(--color-primary);
  font-size: 1em;
}

.hashtagButtons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.hashtagButton {
  background-color: var(--color-secondary);
  color: var(--color-text-light);
  padding: 6px 12px;
  border: 1px solid #666666;
  border-radius: var(--border-radius-pill);
  cursor: pointer;
  font-size: var(--font-size-sm);
  transition: background-color 0.2s, border-color 0.2s;
  white-space: nowrap;
}

.hashtagButton:hover {
  background-color: var(--color-secondary-hover);
  border-color: #777777;
}

.hashtagButton.selected {
  background-color: var(--color-primary);
  color: var(--color-text-dark);
  border-color: var(--color-primary);
  font-weight: bold;
}

.hashtagButton.selected:hover {
  background-color: var(--color-primary-hover);
  border-color: var(--color-primary-hover);
}

.hashtagButton.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
