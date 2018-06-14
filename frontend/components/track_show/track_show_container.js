import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { pausePlayTrack, receiveCurrentTrack } 
from '../../actions/current_track_actions';
import { fetchTrack, deleteTrack } from '../../actions/track_actions';
import {fetchUser} from '../../actions/user_actions';
import TrackShow from './track_show';
import { createComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    track: state.entities.tracks[ownProps.match.params.trackId],
    currentTrack: state.currentTrack,
    playing: state.currentTrack.playing,
    users: state.entities.users
  });
};

const mapDispatchToProps = dispatch => ({
  fetchTrack: id => dispatch(fetchTrack(id)),
  deleteTrack: id => dispatch(deleteTrack(id)),
  pausePlayTrack: () => dispatch(pausePlayTrack()),
  receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track)),
  fetchUser: id => dispatch(fetchUser(id)),
  createComment: comment => dispatch(createComment(comment))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TrackShow)
);


