// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBZUff2ZnjgBS82vvAWerAtAMguH-ZARnc",
  authDomain: "chat-app-a43f3.firebaseapp.com",
  projectId: "chat-app-a43f3",
  storageBucket: "chat-app-a43f3.appspot.com",
  messagingSenderId: "771348424525",
  appId: "1:771348424525:web:0cad3814c384d96b50f904",
  measurementId: "G-TME34HJ9F7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
