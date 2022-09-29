// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChMpI7oow-Gct0OkbM7zqSbvmnOGNUc5M",
  authDomain: "ge-c-e4a18.firebaseapp.com",
  projectId: "ge-c-e4a18",
  storageBucket: "ge-c-e4a18.appspot.com",
  messagingSenderId: "275541542138",
  appId: "1:275541542138:web:a4cdc9fc9256948ffbb543",
  measurementId: "G-CG3F8CV1R0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const auth = getAuth()
export const userCollectionRef = collection(db, 'Users')