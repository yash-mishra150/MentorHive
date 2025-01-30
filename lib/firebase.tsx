import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTsSBzuXHaMihU0G5QF3nXTdw4szFvM3M",
  authDomain: "mentorhive-94c68.firebaseapp.com",
  projectId: "mentorhive-94c68",
  storageBucket: "mentorhive-94c68.firebasestorage.app",
  messagingSenderId: "737267703611",
  appId: "1:737267703611:web:95f71cb6e097cc461ce11e",
  measurementId: "G-RYVPF6TCDE"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
