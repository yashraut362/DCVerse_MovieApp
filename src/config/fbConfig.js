import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyC0F8CqOwAHm7dHC5lqxf50tKnJQTaViOo",
    authDomain: "dcverse-c639f.firebaseapp.com",
    databaseURL: "https://dcverse-c639f.firebaseio.com",
    projectId: "dcverse-c639f",
    storageBucket: "dcverse-c639f.appspot.com",
    messagingSenderId: "561927512147",
    appId: "1:561927512147:web:dea81eff810b930786a6a6"
};
// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const db = firebase.firestore()

export default firebase;


// https://firestore.googleapis.com/v1/projects/dcverse-c639f/databases/(default)/documents/movies/title