import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD5DWA5xZfXgnqsMex3Qo7gQnEaWbgriaw",
  authDomain: "clone-cac06.firebaseapp.com",
  databaseURL: "https://clone-cac06.firebaseio.com",
  projectId: "clone-cac06",
  storageBucket: "clone-cac06.appspot.com",
  messagingSenderId: "206081194058",
  appId: "1:206081194058:web:289b2df7504c9340674eb3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
