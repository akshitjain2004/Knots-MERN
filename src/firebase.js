// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPnOhSuDhpLWcs_IflIUHVeqIGDpnH2B0",
  authDomain: "knots-172ad.firebaseapp.com",
  projectId: "knots-172ad",
  storageBucket: "knots-172ad.appspot.com",
  messagingSenderId: "774517501941",
  appId: "1:774517501941:web:8ca834d344a8f2af2a3abc",
  measurementId: "G-C4EGX7K2NX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
