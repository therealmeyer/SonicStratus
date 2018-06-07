import { connect } from 'react-redux';
import TrackIndex from './track_index';
import { fetchAllTracks } from '../../actions/track_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  let indexTracks = Object.keys(state.entities.tracks).map(id => state.entities.tracks[id])
  return {
    tracks: indexTracks
  };
};

const mapDispatchToprops = (dispatch, ownProps) => ({
  fetchAllTracks: () => dispatch(fetchAllTracks())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToprops)(TrackIndex)
);
