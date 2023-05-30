import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiW6Q87Q-73hzwYyS6Yu6VJZ_6Q-X7BKk",
  authDomain: "casa-tua-immobiliare.firebaseapp.com",
  projectId: "casa-tua-immobiliare",
  storageBucket: "casa-tua-immobiliare.appspot.com",
  messagingSenderId: "250648253312",
  appId: "1:250648253312:web:498f81a53f1e8debb62765"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);