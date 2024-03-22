// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-70af4.firebaseapp.com",
  projectId: "mern-real-estate-70af4",
  storageBucket: "mern-real-estate-70af4.appspot.com",
  messagingSenderId: "187131764736",
  appId: "1:187131764736:web:8858a297c933537eeab8e5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);