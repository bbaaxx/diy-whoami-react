import * as firebase from 'firebase';
import {firebaseConfig} from '../../../../conf/firebase.config.js';
import {getFirebaseAuth} from './getFirebaseAuth';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const fbAuth = getFirebaseAuth();

const unsubscribeAuth = fbAuth.onAuthStateChanged(currentUser => {
  if (currentUser) {
    unsubscribeAuth();
  } else {
    console.log('No user');
    logUserIn();
  }
});

function logUserIn() {
  fbAuth.signInWithEmailAndPassword('testuser1@example.com', 'password123')
    .then(() => {
      unsubscribeAuth();
    }).catch(err => {
      console.log('Error signin in', err);
      unsubscribeAuth();
    });
}
