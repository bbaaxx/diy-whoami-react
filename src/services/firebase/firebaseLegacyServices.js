import {Observable} from 'rx';
import {Map as immutableMap} from 'immutable';
import * as firebase from 'firebase';

export const getDatabaseRef = refId => {
  return Observable.just(firebase.database().ref(`/${refId}`));
};

export const getAuthRef = () => {
  return Observable.just(firebase.database().auth());
};

export const getDataAt = refId => {
  return getDatabaseRef(refId).flatMap(dbRef => {
    return Observable.create(observer => {
      dbRef
        .limitToLast(25)
        .once('value', snap => {
          observer.next(snap.val());
          observer.completed();
        });
    });
  });
};

export const getDataCollectionAt = refId => {
  return getDatabaseRef(refId).flatMap(dbRef => {
    return Observable.create(observer => {
      dbRef
        .limitToLast(25)
        .once('value', snap => {
          observer.next(augmentResponse(snap));
          observer.completed();
        });
    });
  });
};

export const createDataAt = (refId, dataObject) => {
  return getDatabaseRef(refId).flatMap(dbRef => {
    return Observable.create(observer => {
      dbRef
        .push(dataObject, response => {
          observer.next(response);
          observer.completed();
        });
    });
  });
};

export const updateDataAt = (refId, dataKey, dataObject) => {
  return getDatabaseRef(refId).flatMap(dbRef => {
    return Observable.create(observer => {
      dbRef
        .child(dataKey)
        .set(dataObject, response => {
          observer.next(response);
          observer.completed();
        });
    });
  });
};

export const deleteDataAt = (refId, dataKey) => {
  return updateDataAt(refId, dataKey, {});
};

export const subscribeToDataAt = refId => {
  return getDatabaseRef(refId).flatMap(dbRef => {
    return Observable.create(observer => {
      dbRef
        .limitToLast(25)
        .on('value', snap => {
          observer.next(augmentResponse(snap));
        });
    });
  });
};

export const subscribeToDataCollectionAt = refId => {
  return getDatabaseRef(refId).flatMap(dbRef => {
    return Observable.create(observer => {
      dbRef
        .limitToLast(25)
        .on('value', snap => {
          observer.next(augmentResponse(snap));
        });
    });
  });
};

function augmentResponse(snapshot) {
  return immutableMap(snapshot.val())
    .map((item, key) => {
      item._dbKey = key;
      return item;
    });
}
