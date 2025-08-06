import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // For Authentication
import { getFirestore } from "firebase/firestore"; // For Firestore Database
import { getStorage } from "firebase/storage"; // For storing images (we'll need this later for photos)
const firebaseConfig = {
  apiKey: "AIzaSyDUZDNdbmUh9-ubM3uyYyv7171aLpFK5yk",
  authDomain: "whatever-5ad68.firebaseapp.com",
  projectId: "whatever-5ad68",
  storageBucket: "whatever-5ad68.firebasestorage.app",
  messagingSenderId: "951449852897",
  appId: "1:951449852897:web:ab8f7901ddd434ba1b90a0",
  measurementId: "G-RF2ZY5QWHF",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase services and get references to them
const auth = getAuth(app); // Reference to the Authentication service
const db = getFirestore(app); // Reference to the Firestore database
const storage = getStorage(app); // Reference to the Storage service

// Export the initialized services so you can import and use them in other Vue components
export {
  app,
  auth,
  db, // <--- ENSURE THIS IS EXPORTED
  storage,
};
