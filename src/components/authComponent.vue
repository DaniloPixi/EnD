<template>
  <div class="auth-container">
    <h2>{{ isLogin ? "Login" : "Register" }}</h2>
    <form @submit.prevent="authenticateUser">
      <div class="form-group">
        <label for="auth-email">Email</label>
        <input type="email" id="auth-email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="auth-password">Password</label>
        <input type="password" id="auth-password" v-model="password" required />
      </div>
      <button type="submit" :disabled="isLoading">
        {{ isLogin ? "Login" : "Register" }}
      </button>
      <div v-if="error" class="error-message">{{ error }}</div>
    </form>
    <button class="toggle-mode-button" @click="isLogin = !isLogin">
      {{ isLogin ? "Need an account? Register" : "Have an account? Login" }}
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../useStore"; // <-- Only this import should be here
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const email = ref("");
const password = ref("");
const isLogin = ref(true);
const isLoading = ref(false);
const error = ref(null);

const router = useRouter();
const store = useStore();

const authenticateUser = async () => {
  isLoading.value = true;
  error.value = null;

  try {
    if (isLogin.value) {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      const user = userCredential.user;

      store.dispatch("setUser", {
        uid: user.uid,
        email: user.email,
        nickname: user.email.split("@")[0],
      });

      router.push("/");
    } else {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      const user = userCredential.user;

      store.dispatch("setUser", {
        uid: user.uid,
        email: user.email,
        nickname: user.email.split("@")[0],
      });
      router.push("/set-nickname");
    }
  } catch (err) {
    switch (err.code) {
      case "auth/invalid-email":
        error.value = "Invalid email address.";
        break;
      case "auth/user-not-found":
        error.value = "No user found with this email.";
        break;
      case "auth/wrong-password":
        error.value = "Incorrect password.";
        break;
      case "auth/email-already-in-use":
        error.value = "This email is already registered.";
        break;
      case "auth/weak-password":
        error.value = "Password should be at least 6 characters.";
        break;
      default:
        error.value = `An unknown error occurred: ${err.message}`;
    }
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.auth-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

.toggle-mode-button {
  background: none;
  color: #007bff;
  border: none;
  padding: 10px 0;
  cursor: pointer;
  text-decoration: underline;
  width: auto;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
