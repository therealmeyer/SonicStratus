import { RECEIVE_SEARCH, CLEAR_SEARCH, SIGN_IN_SEARCH } from '../actions/search_actions';
import merge from 'lodash/merge';

const searchReducer = (oldState = [], action) => {
  // Object.freeze(oldState);
  // const newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_SEARCH:
      return action.results;
    case SIGN_IN_SEARCH:
      return [];
    case CLEAR_SEARCH:
      return [];
    default: return oldState;
  }
};

export default searchReducer;