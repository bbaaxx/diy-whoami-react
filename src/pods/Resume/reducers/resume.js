import {
  GET_RESUME_REQUESTED,
  GET_RESUME_REJECTED,
  GET_RESUME_FULFILLED
} from '../constants/ActionTypes';

const initialState = {
  resumeData: {}
};

export default function resume(state = initialState, action) {
  switch (action.type) {
    case GET_RESUME_REQUESTED:
      return state;
    case GET_RESUME_REJECTED:
      return state;
    case GET_RESUME_FULFILLED:
      return Object.assign({}, state, {
        resumeData: action.resume
      });
    default:
      return state;
  }
}
