import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCPKorkhQpFVV0b12XwzMPUskTfcc1zm7g",
    authDomain: "testinternbackend.firebaseapp.com",
    databaseURL: "https://testinternbackend-default-rtdb.firebaseio.com",
    projectId: "testinternbackend",
    storageBucket: "testinternbackend.appspot.com",
    messagingSenderId: "448103004110",
    appId: "1:448103004110:web:6d2d5728760f1fa99f9d9f"
  };

firebase.initializeApp(firebaseConfig)
const firestore = firebase.firestore();

export default firestore