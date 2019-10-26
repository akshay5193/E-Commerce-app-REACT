import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBNkCYiVwmILVhodrSg1yyuYZwkl4PWBHQ",
    authDomain: "merchandise-store-db.firebaseapp.com",
    databaseURL: "https://merchandise-store-db.firebaseio.com",
    projectId: "merchandise-store-db",
    storageBucket: "merchandise-store-db.appspot.com",
    messagingSenderId: "1086213552111",
    appId: "1:1086213552111:web:45b1eb1a596477a5d5e81a",
    measurementId: "G-PGNFVTCVZ3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;