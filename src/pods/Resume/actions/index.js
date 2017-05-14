import * as types from '../constants/ActionTypes';
import * as mockData from '../mocks/resume.json';

export function getResume() {
  return dispatch => {
    dispatch(getResumeRequestedAction());
    setTimeout(() => {
      dispatch(getResumeFulfilledAction(mockData));
    }, 2000);
  };
}

export function getResumeRequestedAction() {
  return {type: types.GET_RESUME_REQUESTED};
}

export function getResumeRejectedAction() {
  return {type: types.GET_RESUME_REJECTED};
}

export function getResumeFulfilledAction(resume) {
  return {type: types.GET_RESUME_FULFILLED, resume};
}
