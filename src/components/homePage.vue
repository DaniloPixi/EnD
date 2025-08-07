<template>
    <div class="homepage-container">
      <h2>Our shared digital space</h2>
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
  
    background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px); /* A subtle initial blur */
  border: 1px solid rgba(255, 255, 255, 0.02);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px;
  
  animation: pulse-glass 2s ease-in-out infinite;
  }

  @keyframes pulse-glass {
  0% {
    background-color: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(5px);
  }
  20% {
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
  }
  50% {
    background-color: rgba(255, 255, 255, 0.09); /* Slightly more opaque */
    backdrop-filter: blur(15px); /* Slightly more blurred */
  }
  75% {
    background-color: rgba(255, 255, 255, 0.075);
    backdrop-filter: blur(10px);
  }
  100% {
    background-color: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(5px);
  }
}
  h2 {
    color: #C2005A;
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
    background-color: black;
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