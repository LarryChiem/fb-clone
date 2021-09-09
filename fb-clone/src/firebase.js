// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
// firebaseApps previously initialized using initializeApp()
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDANByevbt38lOwnwj5zYWp7djmAytBOms",
  authDomain: "facebook-clone-2a35d.firebaseapp.com",
  databaseURL: "https://facebook-clone-2a35d.firebaseio.com",
  projectId: "facebook-clone-2a35d",
  storageBucket: "facebook-clone-2a35d.appspot.com",
  messagingSenderId: "429606735343",
  appId: "1:429606735343:web:94127dc592a775bba73a1a",
  measurementId: "G-P2ZHTT7GB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
auth.languageCode = 'it';

const db = getFirestore(app);

export { auth, provider, signInWithPopup };
export default db;