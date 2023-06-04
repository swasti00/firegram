// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/storage'; //storage-store images
import 'firebase/compat/firestore'; //firestore-database

// import firebase from 'firebase/app';
// import 'firebase/storage';
// import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBIFMfuW8pb-JVxj6-1r-PmMMcWaxq1Qec",
  authDomain: "firegram-e60a6.firebaseapp.com",
  projectId: "firegram-e60a6",
  storageBucket: "firegram-e60a6.appspot.com",
  messagingSenderId: "587316068823",
  appId: "1:587316068823:web:ea9fa771db21d6a146cb92"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const projectstorage = firebase.storage();
const projectfirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectstorage, projectfirestore, timestamp};