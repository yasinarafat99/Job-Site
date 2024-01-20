import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKaefpaBRFlYUDKjksEbDOBu8cHOY3T0o",
  authDomain: "react-halaljibika.firebaseapp.com",
  projectId: "react-halaljibika",
  storageBucket: "react-halaljibika.appspot.com",
  messagingSenderId: "889328800189",
  appId: "1:889328800189:web:96411e7719f1f8551102d4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)