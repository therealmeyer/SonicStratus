import React from 'react';
import ReactDOM from 'react-dom';
import { login, signup, logout } from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
import { createTrack, fetchTrack, fetchAllTracks, 
  updateTrack, deleteTrack, fetchUserTracks } from './util/track_api_util';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUser: window.currentUser }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.login = login;
  // window.signup = signup;
  window.logout = logout;

  window.createTrack = createTrack;
  window.fetchUserTracks = fetchUserTracks;
  window.fetchAllTracks = fetchAllTracks;
  window.updateTrack = updateTrack;
  window.deleteTrack = deleteTrack;

  ReactDOM.render(<Root store={store} />, root);
});