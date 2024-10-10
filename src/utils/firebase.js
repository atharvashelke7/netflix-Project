// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCi2OCuQa6fzxctRLJOsQBK2-AoJ7kqc6s",
  authDomain: "netflix-ff9dd.firebaseapp.com",
  projectId: "netflix-ff9dd",
  storageBucket: "netflix-ff9dd.appspot.com",
  messagingSenderId: "578937355592",
  appId: "1:578937355592:web:c241b8fc4de6d1e056077d",
  measurementId: "G-86RR39FLWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();