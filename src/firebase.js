import {useState,useEffect} from 'react';
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

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

export const auth = getAuth();
export const db = getFirestore(app);

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// 로그인한사람 정보
export function useAuth() {
    const [ currentUser, setCurrentUser ] = useState(); 
    useEffect(() => {
        const unsub = onAuthStateChanged(auth,user => setCurrentUser(user));
        return unsub;
    }, [])
    return currentUser
}

export function logout(){
    return signOut(auth);
}

//  profile 사진올리기
export const storage = getStorage(app);
export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, currentUser.uid + '.png');

  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef); 

  updateProfile(currentUser, {photoURL});

}
