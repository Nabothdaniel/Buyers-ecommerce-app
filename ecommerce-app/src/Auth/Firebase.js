// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import dotenv from 'dotenv';
dotenv.config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "buyers-ecommerce-c8581.firebaseapp.com",
  projectId: "buyers-ecommerce-c8581",
  storageBucket: "buyers-ecommerce-c8581.appspot.com",
  messagingSenderId: "375516788713",
  appId: "1:375516788713:web:22ea55dccb45da62cdfd78",
  measurementId: "G-QZH5B27FPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);