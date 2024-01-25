import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDmxTO1ltzA_YsrTOPaXM34WNa05bq63Dg",
  authDomain: "blood-donation-455ad.firebaseapp.com",
  projectId: "blood-donation-455ad",
  storageBucket: "blood-donation-455ad.appspot.com",
  messagingSenderId: "86667388029",
  appId: "1:86667388029:web:691cf96d889c3925a47d14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)