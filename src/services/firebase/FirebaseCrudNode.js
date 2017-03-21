import {Observable} from 'rx';
import {Map as immutableMap} from 'immutable';
import {FirebaseCore} from './FirebaseCore';
import {castFromSchema} from './castFromSchema';

export class FirebaseCrudNode extends FirebaseCore {
  constructor(dataNodeId, dataModelId) {
    super();
    this.dataNodeId = dataNodeId;
    this.dataModelId = dataModelId;
    this.nodeRef = this.dbRef.ref(this.dataNodeId);
  }

  getModelSchema() {
    return this.getDataAt('schemas/' + this.dataModelId).flatMap(response => Observable.just(response.val()));
  }

  getSchemaHelper() {
    return this.getModelSchema().flatMap(schemas => {
      return Observable.just({
        schemas,
        dataModel: castFromSchema(schemas.dataSchema)
      });
    });
  }

  getNode() {
    return this.getDataAt(this.dataNodeId).flatMap(nodeData => Observable.just(immutableMap(nodeData.val()).map((item, key) => {
      item._dbKey = key;
      return item;
    })));
  }

  subscribeToNode() {
    return this.subscribeToDataAt(this.dataNodeId).flatMap(nodeData => {
      return Observable.just(immutableMap(nodeData.val()).map((item, key) => {
        item._dbKey = key;
        return item;
      }));
    });
  }

  getItem(itemID) {
    return this.getDataAt(`${this.dataNodeId}/${itemID}`).flatMap(itemData => Observable.just(immutableMap(itemData.val())));
  }

  subscribeToItem(itemID) {
    return this.subscribeToDataAt(`${this.dataNodeId}/${itemID}`).flatMap(itemData => Observable.just(immutableMap(itemData.val())));
  }

  createItem(data) {
    return this.createDataAt(this.dataNodeId, data);
  }

  updateItem(itemID, data) {
    return this.updateDataAt(`${this.dataNodeId}/${itemID}`, data);
  }

  deleteItem(itemID) {
    return this.deleteDataAt(`${this.dataNodeId}/${itemID}`);
  }

  closeNodeRef() {
    console.log('Closing node reference ... not');
    this.nodeRef.off();
  }
}
