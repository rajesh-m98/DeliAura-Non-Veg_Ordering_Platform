// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq0kJcuKKzR7i55Js-lkK4xbI0A6ta9Mw",
  authDomain: "otpsend-project.firebaseapp.com",
  projectId: "otpsend-project",
  storageBucket: "otpsend-project.appspot.com",
  messagingSenderId: "814121248805",
  appId: "1:814121248805:web:347754bebeffa98fe277cc",
  measurementId: "G-PRZ1BPRVKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);