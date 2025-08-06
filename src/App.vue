<template>
  <div id="app">
    <template v-if="user">
      <setNickname v-if="!hasUserNickname" />

      <div v-else>
        <header class="app-header">
          <div class="header-content">
            <router-link to="/" class="home-link">
              <h1>My App</h1>
            </router-link>
            <p v-if="currentUserNickname" class="user-label">
              Welcome, {{ currentUserNickname }}
            </p>
            <button @click="logout" class="logout-button">Logout</button>
          </div>
        </header>
        <div class="main-content-wrapper">
          <sidebar />
          <div class="routerViewContainer">
            <router-view />
          </div>
        </div>
      </div>
    </template>

    <div v-else class="login-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter, useRoute } from "vue-router";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
import { useStore } from "./useStore"; // <-- Use our custom composable

const store = useStore(); // <-- Correctly initialize the store

const auth = getAuth();
const router = useRouter();
const route = useRoute();

const user = ref(null);
const hasUserNickname = ref(false);

let userSnapshotUnsubscribe = null;

onMounted(() => {
  const authUnsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
    user.value = firebaseUser;

    if (firebaseUser) {
      const userDocRef = doc(db, "users", firebaseUser.uid);

      userSnapshotUnsubscribe = onSnapshot(userDocRef, (docSnap) => {
        hasUserNickname.value = docSnap.exists();
        if (docSnap.exists()) {
          store.dispatch("setUser", {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            nickname: docSnap.data().nickname,
          });
        }
      });

      if (route.path === "/login") {
        router.push("/");
      }
    } else {
      hasUserNickname.value = false;
      if (userSnapshotUnsubscribe) {
        userSnapshotUnsubscribe();
      }
      if (route.path !== "/login") {
        router.push("/login");
      }
    }
  });

  onUnmounted(() => {
    authUnsubscribe();
    if (userSnapshotUnsubscribe) {
      userSnapshotUnsubscribe();
    }
  });
});

const currentUserNickname = computed(() => store.state.currentUser?.nickname);

const logout = async () => {
  try {
    await signOut(auth);
    router.push("/login");
  } catch (err) {
    console.error("Logout error:", err);
  }
};
</script>

<style>
/* Global styles for the app */
:root {
  --color-background-body: #121212;
  --color-background-card: #1e1e1e;
  --color-background-form: #2d2d2d;
  --color-text-light: #e0e0e0;
  --color-text-dark: #1e1e1e;
  --color-text-muted: #888888;
  --color-primary: #40e0d0;
  --color-primary-hover: #32b8a8;
  --color-secondary: #333333;
  --color-secondary-hover: #444444;
  --color-danger: #dc3545;
  --color-danger-hover: #c82333;
  --color-accent-green: #28a745;
  --color-border-dark: #3a3a3a;

  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;

  --border-radius-sm: 4px;
  --border-radius-md: 8px;

  --font-size-sm: 14px;
  --font-size-md: 16px;
  --font-size-lg: 20px;
}

body,
html {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  background-color: var(--color-background-body);
  color: var(--color-text-light);
  min-height: 100vh;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header {
  background-color: var(--color-background-card);
  padding: var(--space-md) var(--space-lg);
  border-bottom: 1px solid var(--color-border-dark);
  color: var(--color-primary);
  text-align: center;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.home-link {
  text-decoration: none;
  color: inherit;
}

.user-label {
  font-weight: bold;
  font-size: var(--font-size-md);
  margin: 0;
  color: var(--color-text-light);
}

.logout-button {
  background-color: transparent;
  color: var(--color-text-light);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--border-radius-sm);
  padding: var(--space-sm) var(--space-md);
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  font-size: var(--font-size-sm);
}

.logout-button:hover {
  background-color: var(--color-secondary);
}

.main-content-wrapper {
  display: flex;
  flex: 1;
  min-height: 100%;
}

.routerViewContainer {
  flex-grow: 1;
  min-width: 0;
  padding: 0 var(--space-lg);
  overflow-y: auto;
  box-sizing: border-box;
}

.login-wrapper {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
