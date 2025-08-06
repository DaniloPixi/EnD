<template>
  <div class="page-container">
    <Sidebar />
    <div class="sectionContainer">
      <h2>Memos</h2>
      <button @click="isInputFormVisible = true" class="newMemoButton">
        Create New Memo
      </button>

      <div v-if="isInputFormVisible" class="memoInputForm">
        <div class="memoInput">
          <textarea
            v-model="newMemoContent"
            placeholder="Write a new memo..."
            class="memoInputTextarea"
          ></textarea>
        </div>

        <div class="fileInputContainer">
          <input
            type="file"
            @change="handleFileUpload"
            ref="fileInput"
            accept="image/*"
            id="fileInput"
          />
          <label for="fileInput" class="customFileInputLabel">
            {{ fileName || "Select an Image" }}
          </label>
        </div>
        <p v-if="uploadProgress" class="uploadProgress">{{ uploadProgress }}</p>

        <div class="hashtagSelector">
          <h4>Add Hashtags (max {{ maxHashtagsPerItem }}):</h4>
          <div class="hashtagButtons">
            <HashtagButton
              v-for="tag in availableHashtags"
              :key="tag"
              :tag="tag"
              :isSelected="selectedNewMemoHashtags.includes(tag)"
              :isDisabled="
                selectedNewMemoHashtags.length >= maxHashtagsPerItem &&
                !selectedNewMemoHashtags.includes(tag)
              "
              @click="toggleHashtag(tag, 'new')"
            />
          </div>
        </div>

        <div class="memoFormActions">
          <button
            @click="addMemo"
            :disabled="!newMemoContent"
            class="baseButton addMemoButton"
          >
            Add Memo
          </button>
          <button @click="cancelInput" class="baseButton cancelButton">Cancel</button>
        </div>
      </div>

      <div class="memos-grid">
        <div v-for="memo in filteredMemos" :key="memo.id" class="memo-card">
          <div v-if="editingMemoId !== memo.id" class="memoDisplayMode">
            <div v-if="memo.imageUrl" class="memo-photo-wrapper">
              <img :src="memo.imageUrl" alt="Memo Image" class="memo-photo" />
            </div>
            <div class="memo-content">
              <p>{{ memo.content }}</p>
              <div class="memoMeta">
                <div class="memoMetaRow">
                  <span class="memoCreator"
                    >By: {{ userNicknames[memo.creator] || "..." }}</span
                  >
                  <small>{{ formatDate(memo.timestamp) }}</small>
                </div>
                <div class="memoTags">
                  <span v-for="tag in memo.tags" :key="tag" class="memoTag"
                    >#{{ tag }}</span
                  >
                </div>
              </div>
              <div class="memoActions">
                <button @click="startEditing(memo)" class="editButton">Edit</button>
                <button @click="deleteMemo(memo.id)" class="deleteButton">Delete</button>
              </div>
            </div>
          </div>
          <div v-else class="memoEditMode">
            <textarea v-model="editingContent" class="editTextarea"></textarea>

            <div class="fileInputContainer">
              <input
                type="file"
                @change="handleEditFileUpload"
                ref="editingFileInput"
                accept="image/*"
                id="editFileInput"
              />
              <label for="editFileInput" class="customFileInputLabel">
                {{ editingFile ? editingFile.name : "Select a new image" }}
              </label>
            </div>
            <p v-if="uploadProgress" class="uploadProgress">{{ uploadProgress }}</p>

            <div class="hashtagSelector">
              <h4>Edit Hashtags (max {{ maxHashtagsPerItem }}):</h4>
              <div class="hashtagButtons">
                <HashtagButton
                  v-for="tag in availableHashtags"
                  :key="tag"
                  :tag="tag"
                  :isSelected="selectedEditedMemoHashtags.includes(tag)"
                  :isDisabled="
                    selectedEditedMemoHashtags.length >= maxHashtagsPerItem &&
                    !selectedEditedMemoHashtags.includes(tag)
                  "
                  @click="toggleHashtag(tag, 'edit')"
                />
              </div>
            </div>
            <div class="memoEditActions">
              <button @click="saveEdit(memo.imageUrl)" class="saveButton">Save</button>
              <button @click="cancelEdit" class="cancelButton">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import { useStore } from "../useStore";
import Sidebar from "./sidebar.vue";
import HashtagButton from "./shared/hashtagButton.vue";
import { auth, db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const store = useStore();
const memos = computed(() => store.state.memos);
const isInputFormVisible = ref(false);
const newMemoContent = ref("");
const fileInput = ref(null);
const selectedFile = ref(null);
const fileName = ref("");
const uploadProgress = ref("");
const editingMemoId = ref(null);
const editingContent = ref("");
const editingFile = ref(null);

const selectedNewMemoHashtags = ref([]);
const selectedEditedMemoHashtags = ref([]);
const userNicknames = ref({});

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
const filterSettings = computed(() => store.state.filterSettings);

const formatDate = (timestamp) => {
  if (!timestamp) return "No Date";
  if (timestamp.seconds) {
    return new Date(timestamp.seconds * 1000).toLocaleDateString();
  }
  return new Date(timestamp).toLocaleDateString();
};

const filteredMemos = computed(() => {
  return memos.value.filter((memo) => {
    const hasTag =
      filterSettings.value.hashtags.length === 0 ||
      filterSettings.value.hashtags.every((tag) => memo.tags.includes(tag));

    const isWithinDateRange = () => {
      if (filterSettings.value.dateRange === "all") return true;
      const memoDate = new Date(memo.timestamp.seconds * 1000);
      const now = new Date();

      switch (filterSettings.value.dateRange) {
        case "today":
          return memoDate.toDateString() === now.toDateString();
        case "last7days":
          const sevenDaysAgo = new Date(now);
          sevenDaysAgo.setDate(now.getDate() - 7);
          return memoDate >= sevenDaysAgo;
        case "last30days":
          const thirtyDaysAgo = new Date(now);
          thirtyDaysAgo.setDate(now.getDate() - 30);
          return memoDate >= thirtyDaysAgo;
        case "specific":
          if (!filterSettings.value.date) return true;
          const specificDate = new Date(filterSettings.value.date);
          return memoDate.toDateString() === specificDate.toDateString();
      }
    };
    return hasTag && isWithinDateRange();
  });
});

const fetchUserNicknames = async () => {
  const creatorIdsToFetch = new Set();
  memos.value.forEach((memo) => {
    if (memo.creator && !userNicknames.value[memo.creator]) {
      creatorIdsToFetch.add(memo.creator);
    }
  });

  if (creatorIdsToFetch.size === 0) {
    return;
  }

  try {
    const userDocsPromises = Array.from(creatorIdsToFetch).map(async (uid) => {
      const userRef = collection(db, "users");
      const userQuery = query(userRef, where("__name__", "==", uid));
      const snapshot = await getDocs(userQuery);
      return { uid, snapshot };
    });

    const results = await Promise.all(userDocsPromises);
    results.forEach(({ uid, snapshot }) => {
      snapshot.forEach((doc) => {
        const userProfile = doc.data();
        userNicknames.value[uid] = userProfile.nickname;
      });
    });
  } catch (error) {
    console.error("Error fetching user nicknames:", error);
  }
};

watch(memos, fetchUserNicknames);

const handleFileUpload = (event) => {
  selectedFile.value = event.target.files[0];
  if (selectedFile.value) {
    fileName.value = selectedFile.value.name;
  } else {
    fileName.value = "";
  }
};

const handleEditFileUpload = (event) => {
  editingFile.value = event.target.files[0];
};

const uploadToCloudinary = async (file) => {
  const cloudName = "dknmcj1qj";
  const uploadPreset = "our_memo_preset";
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  uploadProgress.value = "Uploading...";
  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    if (!response.ok) {
      throw new Error(`Cloudinary upload failed with status: ${response.status}`);
    }
    const data = await response.json();
    uploadProgress.value = "";
    return data.secure_url;
  } catch (error) {
    console.error("Cloudinary upload failed", error);
    uploadProgress.value = "Upload failed!";
    return null;
  }
};

const addMemo = async () => {
  if (!newMemoContent.value) {
    alert("Please write a memo before adding.");
    return;
  }
  let imageUrl = null;
  if (selectedFile.value) {
    uploadProgress.value = "Uploading...";
    imageUrl = await uploadToCloudinary(selectedFile.value);
    if (!imageUrl) {
      uploadProgress.value = "Upload failed!";
      return;
    }
    uploadProgress.value = "Upload successful!";
  }

  await store.dispatch("addMemo", {
    content: newMemoContent.value,
    imageUrl: imageUrl,
    tags: selectedNewMemoHashtags.value,
    creator: auth.currentUser.uid,
  });

  cancelInput();
};

const cancelInput = () => {
  isInputFormVisible.value = false;
  newMemoContent.value = "";
  selectedFile.value = null;
  fileName.value = "";
  uploadProgress.value = "";
  selectedNewMemoHashtags.value = [];
  if (fileInput.value) {
    fileInput.value.value = "";
  }
};

const deleteMemo = (id) => {
  store.dispatch("deleteMemo", id);
};

const startEditing = (memo) => {
  editingMemoId.value = memo.id;
  editingContent.value = memo.content;
  selectedEditedMemoHashtags.value = memo.tags ? [...memo.tags] : [];
};

const saveEdit = async (originalImageUrl) => {
  let imageUrl = originalImageUrl;

  if (editingFile.value) {
    uploadProgress.value = "Uploading new photo...";
    const newImageUrl = await uploadToCloudinary(editingFile.value);
    if (!newImageUrl) {
      uploadProgress.value = "Upload failed!";
      return;
    }
    imageUrl = newImageUrl;
  }
  // CRITICAL FIX: Pass the current user's UID to the editMemo action
  store.dispatch("editMemo", {
    id: editingMemoId.value,
    content: editingContent.value,
    tags: selectedEditedMemoHashtags.value,
    imageUrl: imageUrl,
    creator: auth.currentUser.uid,
  });
  cancelEdit();
};

const cancelEdit = () => {
  editingMemoId.value = null;
  editingContent.value = "";
  editingFile.value = null;
  selectedEditedMemoHashtags.value = [];
};

const toggleHashtag = (tag, type) => {
  let targetArray =
    type === "new" ? selectedNewMemoHashtags.value : selectedEditedMemoHashtags.value;
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

watch(
  filterSettings,
  (newFilters) => {
    console.log("Filters updated:", newFilters);
  },
  { deep: true }
);

onMounted(() => {
  store.dispatch("fetchMemos");
});

onUnmounted(() => {
  // There is no listener to unsubscribe from in the current implementation.
  // If you add a real-time listener later, you'll need to unsubscribe here.
});
</script>
<style scoped>
/* All of your existing styles for the sidebar go here */
.page-container {
  display: flex;
  flex-grow: 1;
}

.sectionContainer {
  /* This is your existing content container */
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 0;
  padding: 0 var(--space-lg);
  box-sizing: border-box;
}

/* Your existing styles below */
h2 {
  color: var(--color-primary);
  margin-top: 0;
}

.newMemoButton {
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

.newMemoButton:hover {
  background-color: var(--color-primary-hover);
  transform: translateY(-2px);
}

.memoInputForm {
  background-color: var(--color-background-form);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--border-radius-md);
  padding: var(--space-lg);
  margin-bottom: var(--space-lg);
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.memoInputTextarea,
.editTextarea {
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

.memoInputTextarea::placeholder,
.editTextarea::placeholder {
  color: var(--color-text-muted);
}

.fileInputContainer {
  position: relative;
  overflow: hidden;
  display: inline-block;
  width: 100%;
  border: 1px solid var(--color-secondary);
  border-radius: var(--border-radius-sm);
  margin-top: var(--space-sm);
}

.fileInputContainer input[type="file"] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  cursor: pointer;
}

.customFileInputLabel {
  display: block;
  padding: var(--space-sm);
  background-color: var(--color-secondary);
  color: var(--color-text-muted);
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}

.hashtagSelector {
  margin-top: var(--space-md);
  margin-bottom: var(--space-md);
  padding: var(--space-sm);
  background-color: var(--color-secondary);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-border-dark);
}

.hashtagButtons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.hashtagButton {
  padding: 5px 10px;
  border-radius: 20px;
  border: none;
  background-color: #555555;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;
}

.hashtagButton.selected {
  background-color: #40e0d0;
  color: #1e1e1e;
  font-weight: bold;
}

.memoFormActions,
.memoActions,
.memoEditActions {
  display: flex;
  justify-content: flex-end;
  gap: var(--space-sm);
  margin-top: var(--space-md);
}

.baseButton,
.editButton,
.deleteButton,
.saveButton {
  padding: var(--space-sm) var(--space-md);
  border: none;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  font-size: var(--font-size-sm);
  transition: background-color 0.2s, color 0.2s, transform 0.2s;
}

.addMemoButton,
.editButton,
.saveButton {
  background-color: var(--color-primary);
  color: var(--color-text-dark);
}

.addMemoButton:hover,
.editButton:hover,
.saveButton:hover {
  background-color: var(--color-primary-hover);
}

.addMemoButton:disabled {
  background-color: #555555;
  cursor: not-allowed;
}

.cancelButton {
  background-color: var(--color-secondary);
  color: var(--color-text-light);
}

.cancelButton:hover {
  background-color: var(--color-secondary-hover);
}

.deleteButton {
  background-color: var(--color-danger);
  color: var(--color-text-light);
}

.deleteButton:hover {
  background-color: var(--color-danger-hover);
}

.uploadProgress {
  margin-top: var(--space-sm);
  color: var(--color-primary);
  font-style: italic;
}

.memos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-md);
  margin-top: var(--space-md);
}

.memo-card {
  background-color: var(--color-background-card);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.memo-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.memoDisplayMode {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.memo-photo-wrapper {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.memo-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.memo-content {
  padding: var(--space-md);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.memo-content p {
  margin-top: 0;
  margin-bottom: var(--space-sm);
  flex-grow: 1;
}

.memoMeta {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  color: var(--color-text-muted);
  font-size: var(--font-size-sm);
  margin-top: var(--space-sm);
}

.memoMetaRow {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.memoTags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.memoCreator {
  font-weight: bold;
  color: var(--color-primary);
  font-style: italic;
}

.memoTag {
  background-color: var(--color-accent-green);
  color: var(--color-text-light);
  padding: 3px 8px;
  border-radius: var(--border-radius-sm);
  font-size: 0.8em;
  white-space: nowrap;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.memoActions,
.memoEditActions {
  display: flex;
  justify-content: flex-end;
  gap: var(--space-sm);
  margin-top: var(--space-md);
}

.memoEditMode {
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}
</style>
