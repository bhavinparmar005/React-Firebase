// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth ,GoogleAuthProvider,FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK-M-wELIaDtNRCR0ztZLckhIbh4nHnAI",
  authDomain: "contactformusingdatabase.firebaseapp.com",
  projectId: "contactformusingdatabase",
  storageBucket: "contactformusingdatabase.firebasestorage.app",
  messagingSenderId: "658974933253",
  appId: "1:658974933253:web:0a702d2d673e97bc34376c",
  measurementId: "G-HC5L0RC3QB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth =getAuth(app)
export const provider = new GoogleAuthProvider();
export const faceProvider = new FacebookAuthProvider();
