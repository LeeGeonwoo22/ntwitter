import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB7WzmPUIWDVghkZ-5mk245_-x4gJcUfrI",
    authDomain: "nwitter-c2e10.firebaseapp.com",
    projectId: "nwitter-c2e10",
    storageBucket: "nwitter-c2e10.appspot.com",
    messagingSenderId: "161964525001",
    appId: "1:161964525001:web:e71aaf13fb91ad98459418"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const authService = firebase.auth();