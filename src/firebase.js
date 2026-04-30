import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0vWgmtJ7JhAJYAYlnKdv_i04HyIlHwRo",
  authDomain: "raajportfolio.firebaseapp.com",
  projectId: "raajportfolio",
  storageBucket: "raajportfolio.firebasestorage.app",
  messagingSenderId: "815316032594",
  appId: "1:815316032594:web:fb01ea1419e7a2e1a3938b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);