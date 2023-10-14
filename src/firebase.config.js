
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCAQ-NXRZ0iJ4cJGVOg9U_4M6cQ0XwGL9o",
  authDomain: "ui-known.firebaseapp.com",
  projectId: "ui-known",
  storageBucket: "ui-known.appspot.com",
  messagingSenderId: "674181656948",
  appId: "1:674181656948:web:f2af54b8ba15a2b3c1bc21"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


export default app;