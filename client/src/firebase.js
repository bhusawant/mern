// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-c99dd.firebaseapp.com",
  projectId: "mern-c99dd",
  storageBucket: "mern-c99dd.appspot.com",
  messagingSenderId: "632271518829",
  appId: "1:632271518829:web:96e5eb2aceeb4508595364"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);