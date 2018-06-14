import {
  RECEIVE_TRACK,
  DELETE_TRACK
} from '../actions/track_actions';
import { RECEIVE_COMMENT, DELETE_COMMENT } from '../actions/comment_actions';
import merge from 'lodash/merge';


const commentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_TRACK: 
      return merge({}, action.comments);
    case DELETE_TRACK:
      return {};
    case RECEIVE_COMMENT:
      return merge({}, action.comments);
    case DELETE_COMMENT:
      delete newState[action.commentId];
      return newState;
    default:
      return oldState;
  }
};

export default commentsReducer;