import * as firebase from 'firebase';

export const getFirebaseAuth = () => {
  return firebase.auth();
};
