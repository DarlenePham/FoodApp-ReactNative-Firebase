import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getStorage } from "firebase/storage";
import{ getFirestore } from "firebase/firestore";

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

const db = getFirestore(app);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(app);

export { auth, db, storage };
export default getFirestore();