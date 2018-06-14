import { 
  RECEIVE_TRACKS, 
  RECEIVE_TRACK, 
  DELETE_TRACK 
} from '../actions/track_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';
import merge from 'lodash/merge';

const tracksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_TRACKS:
      return merge({}, action.tracks);
    case RECEIVE_TRACK:
      newState[action.track.id] = action.track;
      return newState;
    case DELETE_TRACK:
      delete newState[action.trackId];
      return newState;
    case RECEIVE_COMMENT:
      newState[action.track.id] = action.track;
      return newState;
    default: return oldState;
  }
};

export default tracksReducer;