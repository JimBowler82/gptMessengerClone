import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXQbMDBaN9PX37L5wiuNiXJJZi0MHS0iM",
  authDomain: "chatgpt-messenger-d4368.firebaseapp.com",
  projectId: "chatgpt-messenger-d4368",
  storageBucket: "chatgpt-messenger-d4368.appspot.com",
  messagingSenderId: "670626901340",
  appId: "1:670626901340:web:711e3bef8348e55bf3e599",
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
