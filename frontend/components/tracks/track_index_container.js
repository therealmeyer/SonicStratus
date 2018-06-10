import { connect } from 'react-redux';
import TrackIndex from './track_index';
import { fetchAllTracks, deleteTrack } from '../../actions/track_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  let indexTracks = Object.keys(state.entities.tracks).map(id => state.entities.tracks[id])
  return {
    tracks: indexTracks,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllTracks: () => dispatch(fetchAllTracks()),
  deleteTrack: id => dispatch(deleteTrack(id))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TrackIndex)
);
