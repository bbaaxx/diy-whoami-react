import * as firebase from 'firebase';
import {Observable} from 'rx';
import {firebaseConfig} from '../../../firebase.config.js';

export class FirebaseCore {

  constructor() {
    this.appRef = (firebase.apps.length === 0) ?
      firebase.initializeApp(firebaseConfig) :
      firebase.app();
    this.dbRef = firebase.database();
    this.authRef = firebase.auth();
  }

  getDatabaseRef() {
    return Observable.just(this.dbRef);
  }

  getAuthRef() {
    return Observable.just(this.authRef);
  }

  getDataAt(path) {
    return Observable.create(observer => {
      this.dbRef.ref(path)
        .once('value', snap => {
          observer.next(snap);
          observer.completed();
        });
    });
  }

  subscribeToDataAt(path) {
    return Observable.create(observer => {
      this.dbRef.ref(path)
        .on('value', snap => {
          observer.next(snap);
        });
    });
  }

  getCollectionAt(path) {
    return Observable.create(observer => {
      this.dbRef.ref(path)
        .limitToLast(25)
        .once('value', snap => {
          observer.next(snap);
          observer.completed();
        });
    });
  }

  subscribeToCollectionAt(path) {
    return Observable.create(observer => {
      this.dbRef.ref(path)
        .on('value', snap => {
          observer.next(snap);
        });
    });
  }

  createDataAt(path, data) {
    return Observable.create(observer => {
      this.dbRef.ref(path).push(data, () => observer.completed());
    });
  }

  updateDataAt(path, data) {
    return Observable.create(observer => {
      this.dbRef.ref(path).set(data, () => observer.completed());
    });
  }

  deleteDataAt(path) {
    return this.updateDataAt(path, {});
  }
}
