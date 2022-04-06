//import * as firebase from 'firebase';
//import '@firebase/auth';
//import '@firebase/firestore';

// v9 compat packages are API compatible with v8 code
//import * as firebase from "firebase";
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore, collection, getDocs } from "firebase/firestore"

const firebaseConfig = {
  apiKey: 'AIzaSyCtzFyhOH58GKEbOYUrGaontxBBp-umSaY',
  authDomain: 'home-monitor-app-fea56.firebaseapp.com',
  databaseURL: 'https://home-monitor-app-fea56-default-rtdb.firebaseio.com',
  projectId: 'home-monitor-app-fea56',
  storageBucket: 'home-monitor-app-fea56.appspot.com',
  messagingSenderId: '122884505621',
  appId: '1:122884505621:web:a7c0014a5ea153f9a54e1c',
};

// V8 Firebase code
/*let app;
if (firebase.apps.length == 0){
  app = initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}*/

// V9 Modular Firebase initialize app code
initializeApp(firebaseConfig);

const auth = getAuth()
//onAuthStateChanged(auth, user =>{
  // Check for user status
//})
//const analytics = getAnalytics(app)

// Initialize Firestore service
const db = getFirestore()

// collection reference
const colRef = collection(db, 'entrances')

// get collection data test code
/*getDocs(colRef)
  .then((snapshot) => {
    let entrances = []
    snapshot.docs.forEach((doc) => {
      // Pushing a custom object to entrances[] array
      // spread the data of the document object 'doc' using the ... notation
      // also tack on the id of the document object 'doc' 
      entrances.push({ ...doc.data(), id: doc.id })
    })
    console.log(entrances)
  })
  // just in case we have an error, display the message in the console
  .catch(err => {
    console.log(err.message)
  })*/

//const credential = GoogleAuthProvider.credential(
//  googleUser.getAuthResponse().id_token);
export { db, auth };