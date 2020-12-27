import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/database"
import "firebase/storage"


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
}
// Initialize Firebase
//firebase.initializeApp(config);

let auth 
let firestore 
let db 
let storage 

if (typeof window !== "undefined") {

  firebase.initializeApp(config);
  auth = firebase.auth();
  firestore = firebase.firestore();
  db = firebase.database();
  storage = firebase.storage()
  
 }

 export { auth, firestore, db, storage, firebase as default }

 

