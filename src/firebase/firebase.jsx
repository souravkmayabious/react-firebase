// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider  } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANG65_6bkBlbvetcaxOWmkpQt-xWTVOpQ",
  authDomain: "first-4ac3c.firebaseapp.com",
  projectId: "first-4ac3c",
  storageBucket: "first-4ac3c.firebasestorage.app",
  messagingSenderId: "269363460248",
  appId: "1:269363460248:web:8b16888396d1bea3a478ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


export { auth, googleProvider };
