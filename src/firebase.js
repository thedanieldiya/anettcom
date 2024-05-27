import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAnnv21jxfkL_YC14lfPYmOSEMknXG1cNs",
  authDomain: "anettcom-tdd24.firebaseapp.com",
  projectId: "anettcom-tdd24",
  storageBucket: "anettcom-tdd24.appspot.com",
  messagingSenderId: "560107591119",
  appId: "1:560107591119:web:84a45210490f616c222eba",
  measurementId: "G-N3KDZSTFEX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const auth = firebase.auth();

export {db};