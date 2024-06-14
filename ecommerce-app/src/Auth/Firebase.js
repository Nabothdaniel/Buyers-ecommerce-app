// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/**const firebaseConfig = {
  apiKey: "AIzaSyARdPyx8JeXktUFv3FCwatfUZ6V99LE2vo",
  authDomain: "buyers-ecommerce.firebaseapp.com",
  projectId: "buyers-ecommerce",
  storageBucket: "buyers-ecommerce.appspot.com",
  messagingSenderId: "773526865587",
  appId: "1:773526865587:web:8f1d98e889a8aee70692c6",
  measurementId: "G-TTXQSLY4H4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();

 const signInWithGoogle = async () => {
  try {
    const result = await auth.signInWithPopup(googleProvider);
    const user = result.user;
    // Handle successful sign-in (e.g., redirect, store user data)
    console.log(user,'sucess')
  } catch (error) {
    // Handle errors (e.g., display error messages)
    console.log(error)
  }
};

export default signInWithGoogle;**/