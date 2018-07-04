import { fetchSearch } from '../util/search_api_util';


export const RECEIVE_SEARCH = "RECEIVE_SEARCH";
export const CLEAR_SEARCH = "CLEAR_SEARCH";
export const SIGN_IN_SEARCH = "SIGN_IN_SEARCH";

export const receiveSearch = results => ({
  type: RECEIVE_SEARCH,
  results
});

export const clearSearch = () => ({
  type: CLEAR_SEARCH
});

export const signInToSearch = () => ({
  type: SIGN_IN_SEARCH
});


export const fetchSearchResults = query => dispatch => (
  fetchSearch(query).then(results => dispatch(receiveSearch(results)))
);