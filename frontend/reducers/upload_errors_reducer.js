import { CLEAR_UPLOAD_ERRORS } from '../actions/error_actions';
import {RECEIVE_UPLOAD_ERRORS } from '../actions/track_actions';

const uploadErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_UPLOAD_ERRORS:
      return action.errors;
    case CLEAR_UPLOAD_ERRORS: 
      return [];
    default:
      return state;
  }
};

export default uploadErrorsReducer;