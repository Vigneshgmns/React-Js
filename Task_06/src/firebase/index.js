// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVoaJhp0C3wZ1ygSCbkuLjLfFcqIdjBLI",
  authDomain: "react-crud-app-cced1.firebaseapp.com",
  projectId: "react-crud-app-cced1",
  storageBucket: "react-crud-app-cced1.appspot.com",
  messagingSenderId: "196919932177",
  appId: "1:196919932177:web:17fa4ff2447798f11d88b0",
  measurementId: "G-7PM9KQWWD3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app ;

const db = getFirestore();

export {db}