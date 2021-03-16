import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDBkjrYJUzCxxrin1XTGdvNUJuHgGW7-9w",
  authDomain: "tiktok-clone-d673c.firebaseapp.com",
  projectId: "tiktok-clone-d673c",
  storageBucket: "tiktok-clone-d673c.appspot.com",
  messagingSenderId: "108567636530",
  appId: "1:108567636530:web:d4bc4ad450fea1df49ea2b",
  measurementId: "G-GLNCNFX8D0"
};

//initialize firebase app instance
const firebaseApp = firebase.initializeApp(firebaseConfig);

//get firestore for our firebase instance
const db = firebaseApp.firestore();

export default db;