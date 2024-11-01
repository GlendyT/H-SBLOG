// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-edb6f.firebaseapp.com",
  projectId: "blog-edb6f",
  storageBucket: "blog-edb6f.firebasestorage.app",
  messagingSenderId: "1024243636555",
  appId: "1:1024243636555:web:36b78ac4c778bdde6670ce",
  measurementId: "G-H9BHFNLPL5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);