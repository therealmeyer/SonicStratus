import { connect } from 'react-redux';
import React from 'react';
import Nav from './nav';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
  console.log(state.session.currentUser);
  return  {
    currentUser: state.session.currentUser || {id: 22, username: "ryan"}
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);