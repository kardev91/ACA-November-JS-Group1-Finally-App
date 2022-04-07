import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYRNfPBy3Yc6i5sh9ZB5v8gClPNZ-MtzA",
  authDomain: "aca-js-group1-final-app.firebaseapp.com",
  projectId: "aca-js-group1-final-app",
  storageBucket: "aca-js-group1-final-app.appspot.com",
  messagingSenderId: "978669303974",
  appId: "1:978669303974:web:2cde3fab97e2d81e605c67",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
