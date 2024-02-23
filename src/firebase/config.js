import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuaKt7s1JPcttf13CRD0foWeafQ9ejyzU",
  authDomain: "craftmania-ecommerce.firebaseapp.com",
  projectId: "craftmania-ecommerce",
  storageBucket: "craftmania-ecommerce.appspot.com",
  messagingSenderId: "848409461514",
  appId: "1:848409461514:web:179ed9580ff20bcd1e30f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };