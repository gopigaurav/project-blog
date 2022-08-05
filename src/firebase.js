import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRjNuwmhUg6_cxy85HWrQ8InVXNZF5ads",
  authDomain: "ng-blog-4e928.firebaseapp.com",
  projectId: "ng-blog-4e928",
  storageBucket: "ng-blog-4e928.appspot.com",
  messagingSenderId: "53552881935",
  appId: "1:53552881935:web:2f47d8ea2154f9d79b9e7a",
  measurementId: "G-RZGJCG58M6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { auth, db, storage, provider};
