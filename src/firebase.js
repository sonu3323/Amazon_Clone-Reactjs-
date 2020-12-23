import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDYZhK3gfTZ-rzkM4GNFXHU2g5qxklWt_g",
  authDomain: "amzon-react.firebaseapp.com",
  databaseURL: "https://amzon-react.firebaseio.com",
  projectId: "amzon-react",
  storageBucket: "amzon-react.appspot.com",
  messagingSenderId: "206759605131",
  appId: "1:206759605131:web:4dac28fcdde4874433758e",
  measurementId: "G-3RXLNVJWE8",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
