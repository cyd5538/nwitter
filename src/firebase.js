import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import firebase from "firebase/compat/app"; 

const firebaseConfig = {
  apiKey: "AIzaSyB4s4QcXo0NOlDkr_hiq_tLMtf8VvB18DY",
  authDomain: "nwit-12fd8.firebaseapp.com",
  projectId: "nwit-12fd8",
  storageBucket: "nwit-12fd8.appspot.com",
  messagingSenderId: "831772527556",
  appId: "1:831772527556:web:f782ae0dca06f93b69f291"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebase.initializeApp(firebaseConfig)
export const authService = getAuth();