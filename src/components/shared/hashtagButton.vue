<template>
    <button 
      @click="handleClick"
      :class="{ 'selected': isSelected, 'disabled': isDisabled }"
      class="hashtagButton">
      #{{ tag }}
    </button>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    tag: {
      type: String,
      required: true,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    }
  });
  
  const emit = defineEmits(['click']);
  
  const handleClick = () => {
    if (!props.isDisabled) {
      emit('click', props.tag);
    }
  };
  </script>
  
  <style scoped>
  .hashtagButton {
    background-color: #555555;
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
    background-color: #666666;
    border-color: #777777;
  }
  
  .hashtagButton.selected {
    background-color: var(--color-primary);
    color: var(--color-text-dark);
    border-color: var(--color-primary);
    font-weight: bold;
  }
  
  .hashtagButton.selected:hover {
    background-color: #32B8A8;
    border-color: #32B8A8;
  }
  
  .hashtagButton.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
  </style>