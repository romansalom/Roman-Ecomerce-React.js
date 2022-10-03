// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAobiU0hWJZno8tZV_bhq5hUwj8py_Vbn0",
  authDomain: "romanecomerce.firebaseapp.com",
  projectId: "romanecomerce",
  storageBucket: "romanecomerce.appspot.com",
  messagingSenderId: "778511970207",
  appId: "1:778511970207:web:00058850db33132fb057aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);