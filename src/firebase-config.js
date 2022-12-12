// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFM5UvLdRELvGPrBU2TtwKvldqGPZiq5U",
  authDomain: "final-year-project-27b44.firebaseapp.com",
  databaseURL: "https://final-year-project-27b44-default-rtdb.firebaseio.com",
  projectId: "final-year-project-27b44",
  storageBucket: "final-year-project-27b44.appspot.com",
  messagingSenderId: "539098114014",
  appId: "1:539098114014:web:d75796047389bf37f81f4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);