// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import * as firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATW3dJ6SjJ2bIviVzeXjRSlNhqE68lJv0",
  authDomain: "ecommerce-93a02.firebaseapp.com",
  projectId: "ecommerce-93a02",
  storageBucket: "ecommerce-93a02.appspot.com",
  messagingSenderId: "841745512704",
  appId: "1:841745512704:web:b16937fe3f5da6e4c35be5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
const auth = firebase.auth.getAuth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleAuthProvider };