import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjdbmbbTa9-Ln5fYfxmSWT2tf3J5Ifm9g",
  authDomain: "proj3-otp.firebaseapp.com",
  projectId: "proj3-otp",
  storageBucket: "proj3-otp.appspot.com",
  messagingSenderId: "1074771152477",
  appId: "1:1074771152477:web:2de488784ba65407b447b4",
  measurementId: "G-WRBL6PL4J1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
