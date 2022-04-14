// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import{ getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBTsBLFDLtfjM1h_tNkGb9WMCwgUD364c",
  authDomain: "foodapp-8eeb3.firebaseapp.com",
  projectId: "foodapp-8eeb3",
  storageBucket: "foodapp-8eeb3.appspot.com",
  messagingSenderId: "154008389251",
  appId: "1:154008389251:web:0a65c3342c7e6fc293fdb6",
  measurementId: "G-QP9F2G4426"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth();
auth.onAuthStateChanged(user => { 
  // Check for user status
});

export { auth };
export default getFirestore();