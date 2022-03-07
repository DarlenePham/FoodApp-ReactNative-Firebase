// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCriS851mhGd3j8dgWut6zStSJYKJZO4Og",
    authDomain: "test-react-bf6b6.firebaseapp.com",
    projectId: "test-react-bf6b6",
    storageBucket: "test-react-bf6b6.appspot.com",
    messagingSenderId: "319466085329",
    appId: "1:319466085329:web:4316ccd50e068085c81ef0"
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