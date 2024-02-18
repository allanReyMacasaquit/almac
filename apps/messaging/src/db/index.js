import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAj27WRG8-Yg8ONqj3IsT8tnyguc8Sa164",
  authDomain: "svelte-sharing-messages.firebaseapp.com",
  databaseURL: "https://svelte-sharing-messages-default-rtdb.firebaseio.com",
  projectId: "svelte-sharing-messages",
  storageBucket: "svelte-sharing-messages.appspot.com",
  messagingSenderId: "390362192468",
  appId: "1:390362192468:web:8a4d374573796e438babc1"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
