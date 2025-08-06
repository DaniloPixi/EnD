<template>
    <div class="user-setup-container">
      <div class="user-setup-card">
        <h2>Welcome!</h2>
        <p>Please choose a nickname to use in the shared space.</p>
        <form @submit.prevent="saveNickname">
          <input
            v-model="nickname"
            type="text"
            placeholder="Enter your nickname"
            required
            minlength="3"
            maxlength="20"
          />
          <button type="submit" :disabled="isSaving">
            {{ isSaving ? 'Saving...' : 'Save Nickname' }}
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { db, auth } from '../firebase';
  import { doc, setDoc } from 'firebase/firestore';
  
  // Reactive state for the nickname input and saving status
  const nickname = ref('');
  const isSaving = ref(false);
  
  // Define emits to signal that the nickname has been saved
  const emit = defineEmits(['nickname-saved']);
  
  const saveNickname = async () => {
    if (!nickname.value || isSaving.value) {
      return;
    }
  
    isSaving.value = true;
    const user = auth.currentUser;
  
    if (!user) {
      console.error("No user authenticated. Cannot save nickname.");
      isSaving.value = false;
      return;
    }
  
    try {
      // Create a document in the 'users' collection with the user's UID as the document ID
      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, {
        nickname: nickname.value,
        createdAt: new Date(),
      });
  
      console.log("Nickname saved successfully for user:", user.uid);
      // Emit an event to the parent component (App.vue)
      emit('nickname-saved', nickname.value);
    } catch (e) {
      console.error("Error saving nickname:", e);
      alert("Failed to save nickname. Please try again.");
    } finally {
      isSaving.value = false;
    }
  };
  </script>
  
  <style scoped>
  .user-setup-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 100px); /* Adjust height to fill remaining space */
    background-color: #1a1a1a;
    color: #e0e0e0;
  }
  
  .user-setup-card {
    background-color: #2a2a2a;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    text-align: center;
    width: 100%;
    max-width: 400px;
  }
  
  .user-setup-card h2 {
    color: #40E0D0;
    margin-bottom: 10px;
  }
  
  .user-setup-card p {
    margin-bottom: 25px;
  }
  
  .user-setup-card input {
    width: 100%;
    padding: 12px;
    margin-bottom: 20px;
    border: 1px solid #555;
    border-radius: 5px;
    background-color: #333;
    color: #e0e0e0;
    box-sizing: border-box;
    font-size: 1em;
  }
  
  .user-setup-card button {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 5px;
    background-color: #40E0D0;
    color: #1e1e1e;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .user-setup-card button:hover {
    background-color: #32B8A8;
  }
  
  .user-setup-card button:disabled {
    background-color: #555;
    color: #aaa;
    cursor: not-allowed;
  }
  </style>