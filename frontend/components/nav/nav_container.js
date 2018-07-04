import { connect } from 'react-redux';
import React from 'react';
import Nav from './nav';
import { fetchSearchResults, clearSearch, signInToSearch } from '../../actions/search_actions';
import { logout } from '../../actions/session_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  // debugger;
  return  {
    searchResults: state.search,
    currentUser: state.session.currentUser,
    path: ownProps.location.pathname,
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchSearch: query => dispatch(fetchSearchResults(query)),
  clearSearch: () => dispatch(clearSearch()),
  signInSearch: () => dispatch(signInToSearch())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));