import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCPKorkhQpFVV0b12XwzMPUskTfcc1zm7g",
  authDomain: "testinternbackend.firebaseapp.com",
  projectId: "testinternbackend",
  storageBucket: "testinternbackend.appspot.com",
  messagingSenderId: "448103004110",
  appId: "1:448103004110:web:6d2d5728760f1fa99f9d9f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp)

export { firebaseConfig, firebaseApp, firestore,}