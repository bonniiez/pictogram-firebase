import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

// app's Firebase project configuration
var firebaseConfig = {
    apiKey: "AIzaSyADSh2WUPqZ-mYpJCPToSUZzuvIAmXHjFU",
    authDomain: "pictogram-d9648.firebaseapp.com",
    projectId: "pictogram-d9648",
    storageBucket: "pictogram-d9648.appspot.com",
    messagingSenderId: "413726148435",
    appId: "1:413726148435:web:478df06f785980a63f43a6"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const projectStorage = firebaseApp.storage();
const projectFirestore = firebaseApp.firestore();
const firebaseAuth = firebaseApp.auth();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firebaseAuth, projectStorage, projectFirestore, timestamp };
