import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cinemind-718d8.firebaseapp.com",
  projectId: "cinemind-718d8",
  storageBucket: "cinemind-718d8.firebasestorage.app",
  messagingSenderId: "504290420575",
  appId: "1:504290420575:web:9b5f2c2a6432ae07d978ea",
  measurementId: "G-JGGZVYTWTJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);