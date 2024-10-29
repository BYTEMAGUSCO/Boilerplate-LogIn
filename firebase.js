// firebase.js
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyB7S5lTW_-IW-YRSfaMiGKkuCh1uH944SQ",
  authDomain: "boilerplate-a.firebaseapp.com",
  projectId: "boilerplate-a",
  storageBucket: "boilerplate-a.appspot.com",
  messagingSenderId: "335653653192",
  appId: "1:335653653192:web:4134903bfbed88a3bfb3fd",
  measurementId: "G-0HNT7QCV03"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Initialize Firestore
const db = getFirestore(app); // Add Firestore initialization

// Conditionally initialize Analytics if supported
let analytics;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});

// Export auth and db for use in your app
export { auth, db, analytics };
