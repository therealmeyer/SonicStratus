import { connect } from 'react-redux';
import React from 'react';
import Nav from './nav';
import { logout } from '../../actions/session_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  // debugger;
  return  {
    currentUser: state.session.currentUser,
    path: ownProps.location.pathname,
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));