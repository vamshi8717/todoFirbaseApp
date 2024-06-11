// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3tPwfgrqZaIaCOmRrjgC_VjTiEmXo-2U",
  authDomain: "fir-todo-app-dcb10.firebaseapp.com",
  projectId: "fir-todo-app-dcb10",
  storageBucket: "fir-todo-app-dcb10.appspot.com",
  messagingSenderId: "624387683561",
  appId: "1:624387683561:web:2017b7dc8d2cccea1a2c78",
  measurementId: "G-RCJQHFBFB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const db = getFirestore(app);