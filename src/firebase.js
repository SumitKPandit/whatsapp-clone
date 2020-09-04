import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCbmpgGsmpPYg8cYmF5at4uxAWiI5jf6IQ",
  authDomain: "whatsapp-clone-19fa7.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-19fa7.firebaseio.com",
  projectId: "whatsapp-clone-19fa7",
  storageBucket: "whatsapp-clone-19fa7.appspot.com",
  messagingSenderId: "840010589700",
  appId: "1:840010589700:web:fce8eaa0bb8f604d82b751",
  measurementId: "G-4W2WBK0797",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
