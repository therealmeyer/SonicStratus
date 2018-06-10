import { START_LOADING, RECEIVE_TRACKS, RECEIVE_TRACK } from '../actions/track_actions';
import {
  RECEIVE_UPLOAD_ERRORS
} from '../actions/error_actions';

const LoadingReducer = (state = true, action) => {
  Object.freeze(state);

  switch (action.type) {
    case START_LOADING:
      return true;
    case RECEIVE_TRACKS:
    case RECEIVE_TRACK:
    case RECEIVE_UPLOAD_ERRORS:
      return false;
    default:
      return state;
  }
};

export default LoadingReducer;