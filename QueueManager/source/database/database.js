import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import uuid from "uuid-random";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9be2gXvuRvRwSMtxOckWFmyu-kdmfvSk",
  authDomain: "q-up-2b8ae.firebaseapp.com",
  projectId: "q-up-2b8ae",
  storageBucket: "q-up-2b8ae.appspot.com",
  messagingSenderId: "461474743043",
  appId: "1:461474743043:web:e5828fb4d057e9ebf5df36",
};

let app;
let db;

// Initialize Firebase
function initializeApplication() {
  if (!app) {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
  }
}

// Export the Firestore instance
export { db, initializeApplication };
