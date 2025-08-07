<template>
  <aside
    class="sidebar-container"
    :class="{ expanded: isExpanded }"
    @mouseenter="expandOnHover"
    @mouseleave="collapseOnHover"
  >
    <div class="sidebar-header">
      <h3>
        <span v-if="isExpanded">Filter Content</span>
      </h3>
    </div>

    <div class="sidebar-content">
      <div class="filter-section">
        <h4>By Hashtag:</h4>
        <div class="hashtag-filter-buttons">
          <button
            v-for="tag in availableHashtags"
            :key="tag"
            @click.stop="toggleFilterHashtag(tag)"
            :class="{ selected: filterSettings.hashtags.includes(tag) }"
            class="filter-hashtag-button"
          >
            #{{ tag }}
          </button>
        </div>
        <button @click.stop="clearHashtagFilters" class="clear-filters-button">
          Clear Hashtag Filters
        </button>
      </div>

      <div class="filter-section">
        <h4>By Date:</h4>
        <div class="date-filter-options">
          <label for="specific-date">Specific Date:</label>
          <input
            type="date"
            id="specific-date"
            :value="filterSettings.date"
            @change="updateDateFilter"
            class="date-input"
          />

          <div class="date-range-buttons">
            <button
              @click.stop="setDateRange('today')"
              :class="{ selected: filterSettings.dateRange === 'today' }"
              class="filter-date-button"
            >
              Today
            </button>
            <button
              @click.stop="setDateRange('last7days')"
              :class="{ selected: filterSettings.dateRange === 'last7days' }"
              class="filter-date-button"
            >
              Last 7 Days
            </button>
            <button
              @click.stop="setDateRange('last30days')"
              :class="{ selected: filterSettings.dateRange === 'last30days' }"
              class="filter-date-button"
            >
              Last 30 Days
            </button>
            <button
              @click.stop="setDateRange('all')"
              :class="{ selected: filterSettings.dateRange === 'all' }"
              class="filter-date-button"
            >
              All Time
            </button>
          </div>
        </div>
        <button @click.stop="clearDateFilters" class="clear-filters-button">
          Clear Date Filters
        </button>
      </div>

      <div class="filter-actions">
        <button @click.stop="resetAllFilters" class="reset-all-filters-button">
          Reset All Filters
        </button>
      </div>
    </div>
  </aside>

  <button v-if="isMobile" class="menu-button" @click="isExpanded = !isExpanded">
    <span v-if="!isExpanded">☰</span>
    <span v-else>✕</span>
  </button>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useStore } from "../useStore";

const store = useStore();

const isExpanded = ref(false);
const isMobile = ref(false);

const expandOnHover = () => {
  if (!isMobile.value) {
    isExpanded.value = true;
  }
};

const collapseOnHover = () => {
  if (!isMobile.value) {
    isExpanded.value = false;
  }
};

const updateIsMobile = () => {
  isMobile.value = window.innerWidth < 768;
  if (!isMobile.value) {
    isExpanded.value = false; // Collapse the sidebar on desktop by default
  }
};

onMounted(() => {
  updateIsMobile();
  window.addEventListener("resize", updateIsMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateIsMobile);
});

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

const filterSettings = computed(() => store.state.filterSettings);

const toggleFilterHashtag = (tag) => {
  const currentHashtags = [...filterSettings.value.hashtags];
  const index = currentHashtags.indexOf(tag);

  if (index > -1) {
    currentHashtags.splice(index, 1);
  } else {
    currentHashtags.push(tag);
  }

  store.dispatch("updateFilterSettings", { hashtags: currentHashtags });
};

const clearHashtagFilters = () => {
  store.dispatch("updateFilterSettings", { hashtags: [] });
};

const setDateRange = (range) => {
  store.dispatch("updateFilterSettings", { dateRange: range, date: null });
};

const updateDateFilter = (event) => {
  store.dispatch("updateFilterSettings", {
    date: event.target.value,
    dateRange: "specific",
  });
};

const clearDateFilters = () => {
  store.dispatch("updateFilterSettings", { date: null, dateRange: "all" });
};

const resetAllFilters = () => {
  store.dispatch("updateFilterSettings", { hashtags: [], date: null, dateRange: "all" });
};
</script>

<style scoped>
/* Mobile-first styles (default) */
.sidebar-container {
  width: 100%;
  max-width: 100%;
  padding: 20px 10px;
  background-color: #1e1e1e;
  border-right: none;
  box-shadow: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;
}

.sidebar-container.expanded {
  transform: translateX(0);
}

.sidebar-content {
  max-height: 9999px; /* Show content on mobile */
  opacity: 1;
  pointer-events: auto;
}

.sidebar-header {
  display: none; /* Hide header on mobile for a cleaner look */
}

.menu-button {
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 1001;
  background-color: #40e0d0;
  border: none;
  color: #1e1e1e;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.5em;
  line-height: 1;
}

/* Desktop-specific styles (applied on screens wider than 768px) */
@media (min-width: 768px) {
  .sidebar-container {
    /* Desktop default collapsed state */
    position: sticky;
    top: 0;
    left: 0;
    width: 60px;
    max-width: 60px;
    padding: 20px 10px;
    border-right: 1px solid #3a3a3a;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transform: translateX(0);
    transition: width 0.3s ease-out, max-width 0.3s ease-out, padding 0.3s ease-out;
  }

  /* Desktop expanded state */
  .sidebar-container.expanded,
  .sidebar-container:hover {
    width: 25%;
    max-width: 300px;
    padding: 20px;
    cursor: default;
  }

  .sidebar-header {
    display: block; /* Show header on desktop */
  }

  .sidebar-content {
    /* Desktop collapsed state hides content */
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
    transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }

  .sidebar-container.expanded .sidebar-content,
  .sidebar-container:hover .sidebar-content {
    /* Desktop expanded state shows content */
    max-height: 9999px;
    opacity: 1;
    pointer-events: auto;
  }

  .menu-button {
    display: none; /* Hide the menu button on desktop */
  }
}

/* The following are your original styles, they are now correctly placed after the media query */
.sidebar-header {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #3a3a3a;
  text-align: center;
  cursor: pointer;
}

.sidebar-header h3 {
  color: #40e0d0;
  margin: 0;
  font-size: 1.5em;
  white-space: nowrap;
}

.collapsed-icon {
  font-size: 2em;
  line-height: 1;
  display: block;
}

.sidebar-container:not(.expanded) .sidebar-header h3 span:first-child,
.sidebar-container:hover .sidebar-header h3 span:first-child {
  display: none;
}
.sidebar-container.expanded .sidebar-header h3 .collapsed-icon {
  display: none;
}

.sidebar-container:hover:not(.expanded) .sidebar-header h3 span:first-child {
  display: block;
}
.sidebar-container:hover:not(.expanded) .sidebar-header h3 .collapsed-icon {
  display: none;
}

.filter-section {
  background-color: #282828;
  border: 1px solid #3a3a3a;
  border-radius: 8px;
  padding: 15px;
}

.filter-section h4 {
  color: #e0e0e0;
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1.1em;
  white-space: nowrap;
}

.hashtag-filter-buttons,
.date-range-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.filter-hashtag-button,
.filter-date-button {
  background-color: #555555;
  color: white;
  padding: 6px 12px;
  border: 1px solid #666666;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9em;
  transition: background-color 0.2s, border-color 0.2s, transform 0.1s, box-shadow 0.2s;
  white-space: nowrap;
}

.filter-hashtag-button:hover,
.filter-date-button:hover {
  background-color: #666666;
  border-color: #777777;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.filter-hashtag-button.selected,
.filter-date-button.selected {
  background-color: #40e0d0;
  color: #1e1e1e;
  border-color: #40e0d0;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.filter-hashtag-button.selected:hover,
.filter-date-button.selected:hover {
  background-color: #32b8a8;
  border-color: #32b8a8;
  transform: translateY(-1px);
}

.clear-filters-button {
  width: 100%;
  padding: 8px 10px;
  background-color: #555555;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
  margin-top: 10px;
  transition: background-color 0.2s, transform 0.2s;
}

.clear-filters-button:hover {
  background-color: #666666;
  transform: translateY(-1px);
}

.filter-actions {
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid #3a3a3a;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.reset-all-filters-button {
  width: 100%;
  padding: 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.2s, transform 0.2s;
}

.reset-all-filters-button:hover {
  background-color: #c82333;
  transform: translateY(-1px);
}

.date-filter-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;
}

.date-filter-options label {
  color: #e0e0e0;
  font-size: 0.9em;
}

.date-input {
  width: 100%;
  padding: 8px;
  border: 1px solid #555555;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #333333;
  color: #e0e0e0;
  font-family: "Montserrat", sans-serif;
  font-size: 0.9em;
}

.date-input::-webkit-calendar-picker-indicator {
  filter: invert(1);
  cursor: pointer;
}
</style>
