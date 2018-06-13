import { connect } from 'react-redux';
import { fetchUserTracks, deleteTrack } from '../../actions/track_actions';
import { receiveCurrentTrack, pausePlayTrack } from '../../actions/current_track_actions';
import { withRouter } from 'react-router';
import { selectUserTracks } from '../../reducers/selectors';
import UserIndex from './user_index';

const mapStateToProps = (state, ownProps) => {
  let tracksIndex = Object.keys(state.entities.tracks).map(id => state.entities.tracks[id]);
  // debugger;
  return {
    tracks: selectUserTracks(tracksIndex, ownProps.match.params.userId),
    currentUser: state.session.currentUser,
    currentTrack: state.currentTrack
  };
}

const mapDispatchToProps = dispatch => ({
  fetchUserTracks: (userId) => dispatch(fetchUserTracks(userId)),
  deleteTrack: id => dispatch(deleteTrack(id)),
  receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track)),
  pausePlayTrack: () => dispatch(pausePlayTrack())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserIndex));