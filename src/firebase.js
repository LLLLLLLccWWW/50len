// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBibRGkLTp0DPsmPNF-oKm98XxjEkCnQBM",
  authDomain: "len-fd1dd.firebaseapp.com",
  projectId: "len-fd1dd",
  storageBucket: "len-fd1dd.firebasestorage.app",
  messagingSenderId: "256647997531",
  appId: "1:256647997531:web:8f87ce4e75dc67604f777e",
  measurementId: "G-WN4JD6RP2J",
  databaseURL: "https://len-fd1dd-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = getDatabase(app);

export {database};