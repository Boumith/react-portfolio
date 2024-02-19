

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaO3vBNy4HMbdb1PrrtsAeSuv5BKVBZOQ",
  authDomain: "portfolio-soumith.firebaseapp.com",
  projectId: "portfolio-soumith",
  storageBucket: "portfolio-soumith.appspot.com",
  messagingSenderId: "982009385052",
  appId: "1:982009385052:web:5e49c9f6ac0bf3c9071699"
};


export const app = initializeApp(firebaseConfig);

export const db = getFirestore();