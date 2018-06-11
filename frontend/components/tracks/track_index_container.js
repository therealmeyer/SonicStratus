import { connect } from 'react-redux';
import TrackIndex from './track_index';
import { fetchAllTracks, deleteTrack } from '../../actions/track_actions';
import { receiveCurrentTrack, pausePlayTrack } from '../../actions/current_track_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  let indexTracks = Object.keys(state.entities.tracks).map(id => state.entities.tracks[id])
  // debugger;
  return {
    tracks: indexTracks,
    currentUser: state.session.currentUser,
    currentTrack: state.currentTrack
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllTracks: () => dispatch(fetchAllTracks()),
  deleteTrack: id => dispatch(deleteTrack(id)),
  receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track)),
  pausePlayTrack: () => dispatch(pausePlayTrack())

});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TrackIndex)
);
