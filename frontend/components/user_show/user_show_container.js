import React from 'react';
import {
  connect
} from 'react-redux';
import {
  withRouter
} from 'react-router';
import {
  pausePlayTrack,
  receiveCurrentTrack
} from '../../actions/current_track_actions';
import { fetchUser, updateUser } from '../../actions/user_actions';
import {fetchUserTracks} from '../../actions/track_actions';
import UserShow from './user_show';
import {
  deleteTrack
}
from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    currentTrack: state.currentTrack.playing,
    user: state.entities.users[ownProps.match.params.userId]
  });
};

const mapDispatchToProps = dispatch => ({
  fetchUserTracks: (userId) => dispatch(fetchUserTracks(userId)),
  deleteTrack: id => dispatch(deleteTrack(id)),
  receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track)),
  fetchUser: id => dispatch(fetchUser(id)),
  pausePlayTrack: () => dispatch(pausePlayTrack()),
  updateUser: (id, data) => dispatch(updateUser(id, data))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));




