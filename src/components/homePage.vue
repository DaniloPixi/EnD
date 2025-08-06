<template>
    <div class="homepage-container">
      <h2>Welcome to Our Shared Space!</h2>
      <p>This is your personalized homepage.</p>
      <p>Use the navigation above to explore Memos and Plans.</p>
  
      <div class="quick-links">
        <router-link to="/memos" class="nav-button">View Memos</router-link>
        <router-link to="/plans" class="nav-button">Check Plans</router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  // No specific logic needed for a simple homepage for now
  </script>
  
  <style scoped>
  .homepage-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh; /* Takes up most of the screen height */
    text-align: center;
    padding: 20px;
    background-color: #282828; /* Slightly lighter dark background */
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  }
  
  h2 {
    color: #40E0D0;
    font-size: 2.5em;
    margin-bottom: 20px;
  }
  
  p {
    color: #cccccc;
    font-size: 1.1em;
    line-height: 1.6;
    max-width: 600px;
    margin-bottom: 25px;
  }
  
  .quick-links {
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }
  
  /* Reuse existing nav-button styles from App.vue or define specific for homepage */
  .nav-button {
    background-color: #555555;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.2s, transform 0.2s;
  }
  
  .nav-button:hover {
    background-color: #666666;
    transform: translateY(-2px);
  }
  </style>