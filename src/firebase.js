import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCsnZvoiQd7GgXUzgfDX8uyYZeWvZ0Rf9U",
  authDomain: "sveltekit-web-app-ba666.firebaseapp.com",
  projectId: "sveltekit-web-app-ba666",
  storageBucket: "sveltekit-web-app-ba666.appspot.com",
  messagingSenderId: "700405674978",
  appId: "1:700405674978:web:02eba407a9b0067919ffbb"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth= getAuth();
const db = getFirestore();
const storage = getStorage(firebaseApp);

export {firebaseApp, auth, db, storage};
