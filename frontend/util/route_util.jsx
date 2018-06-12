import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';


const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
        <Redirect to="/stream" />
      )
  )} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => {
  // debugger;
  return (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
        <Redirect to="/" />
      )
  )} />
);
};

const UserProtected = ({ component: Component, path, currentUser, loggedIn, track, exact}) => {
  // debugger;
  return (
  <Route path={path} exact={exact} render={(props) => (
    Boolean(track) && loggedIn && currentUser.id === track.user_id ? (
      <Component {...props} />
    ) : (
      <Redirect to="/stream" />
      )
    )} />);
};


const mapStateToProps = (state, ownProps) => {
  // debugger;
  return { loggedIn: Boolean(state.session.currentUser),
          currentUser: state.session.currentUser,
          track: state.entities.tracks[ownProps.computedMatch.params.trackId]
        };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));

export const UserProtectedRoute = withRouter(connect(mapStateToProps)(UserProtected));