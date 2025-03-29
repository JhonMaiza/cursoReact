// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvGbK0mvZT225zDZWsmTAR1IFk7ISN2IQ",
  authDomain: "react-curso-e5ff3.firebaseapp.com",
  projectId: "react-curso-e5ff3",
  storageBucket: "react-curso-e5ff3.firebasestorage.app",
  messagingSenderId: "1081039451809",
  appId: "1:1081039451809:web:32714cef0010190c2462e0"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );