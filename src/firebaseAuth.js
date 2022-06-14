// Import the functions you need from the SDKs you need
import { getAuth, sendSignInLinkToEmail , GoogleAuthProvider, signInWithEmailLink } from "firebase/auth";
import { initializeApp } from 'firebase/app'


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
const app = initializeApp(firebaseConfig);

// export

// Initialize Firebase Authentication and get a reference to the service

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();


export { auth, googleAuthProvider, sendSignInLinkToEmail, signInWithEmailLink };