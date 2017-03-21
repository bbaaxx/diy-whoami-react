import * as firebase from 'firebase';

export const getFirebaseDb = () => {
  return firebase.database();
};
