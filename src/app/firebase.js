// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: "sggs-scanner.firebaseapp.com",
  databaseURL: "https://sggs-scanner-default-rtdb.firebaseio.com",
  projectId: "sggs-scanner",
  storageBucket: "sggs-scanner.appspot.com",
  messagingSenderId: "810452009516",
  appId: "1:810452009516:web:faaa27d16bf7de53210789",
  measurementId: "G-TE1RV9FEYR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}
const db = getFirestore(app);

export {app, analytics, db};
