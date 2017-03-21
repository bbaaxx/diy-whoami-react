import * as fbcs from './firebase/firebaseLegacyServices';
import {FirebaseCrudNode} from './firebase/FirebaseCrudNode';

export const getDalInstance = (dataNodeId, dataModelId) => {
  return new FirebaseCrudNode(dataNodeId, dataModelId);
};

export const getDataAt = fbcs.getDataAt;

// export const createDataAt = nodeId => {
//   return fbcs.createDataAt(nodeId);
// };
export const createDataAt = fbcs.createDataAt;

// export const updateDataAt = (nodeId, dataKey, dataObject) => {
//   return fbcs.updateDataAt(nodeId, dataKey, dataObject);
// };
export const updateDataAt = fbcs.updateDataAt;

// export const deleteDataAt = nodeId => {
//   return fbcs.deleteDataAt(nodeId);
// };
export const deleteDataAt = fbcs.deleteDataAt;

// export const subscribeToDataAt = nodeId => {
//   return fbcs.subscribeToDataAt(nodeId);
// };
export const subscribeToDataAt = fbcs.subscribeToDataAt;
