//import * as firebase from 'firebase';
//import '@firebase/auth';
//import '@firebase/firestore';

// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCtzFyhOH58GKEbOYUrGaontxBBp-umSaY',
  authDomain: 'home-monitor-app-fea56.firebaseapp.com',
  databaseURL: 'https://home-monitor-app-fea56-default-rtdb.firebaseio.com',
  projectId: 'home-monitor-app-fea56',
  storageBucket: 'home-monitor-app-fea56.appspot.com',
  messagingSenderId: '122884505621',
  appId: '1:122884505621:web:52093840b5ab809da54e1c',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, user => {
  // Check for user status
});

export { firebase };