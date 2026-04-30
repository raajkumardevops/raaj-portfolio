import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 🔥 AUTH
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

// INIT
const app = initializeApp(firebaseConfig);

// DB
export const db = getFirestore(app);

// AUTH
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();