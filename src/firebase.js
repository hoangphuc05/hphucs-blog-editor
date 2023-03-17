// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI_xMY2D_JFUmwSrI_g-kXpN6ylT-ykxA",
  authDomain: "hphucs-blog.firebaseapp.com",
  projectId: "hphucs-blog",
  storageBucket: "hphucs-blog.appspot.com",
  messagingSenderId: "880834511973",
  appId: "1:880834511973:web:c96748251cf7b562a9b28c",
  measurementId: "G-BF0P9H6870"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app, analytics};