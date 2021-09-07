// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDANByevbt38lOwnwj5zYWp7djmAytBOms",
  authDomain: "facebook-clone-2a35d.firebaseapp.com",
  projectId: "facebook-clone-2a35d",
  storageBucket: "facebook-clone-2a35d.appspot.com",
  messagingSenderId: "429606735343",
  appId: "1:429606735343:web:94127dc592a775bba73a1a",
  measurementId: "G-P2ZHTT7GB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = app.firestore();
const auth = auth();