import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchTrack } from '../../actions/track_actions';
import TrackShow from './track_show';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    track: state.entities.tracks[ownProps.match.params.trackId]
  });
};

const mapDispatchToProps = dispatch => ({
  fetchTrack: id => dispatch(fetchTrack(id))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TrackShow)
);


