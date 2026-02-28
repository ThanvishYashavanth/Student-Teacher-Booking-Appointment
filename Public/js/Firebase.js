import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0RiowElzDv-8VF8bU_4S9HGz4BP5kBgg",
  authDomain: "studentbookingsystem.firebaseapp.com",
  projectId: "studentbookingsystem",
  storageBucket: "studentbookingsystem.firebasestorage.app",
  messagingSenderId: "1046829474732",
  appId: "1:1046829474732:web:9d4e7ea4d4a1c9d37e5009",
  measurementId: "G-3JZSRG4BSW"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
