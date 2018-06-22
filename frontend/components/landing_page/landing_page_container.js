import { connect } from 'react-redux';
import LandingPageIndex from './landing_page_index';
import { fetchAllTracks} from '../../actions/track_actions';
import { withRouter } from 'react-router';
import { firstTwelveTracks } from '../../reducers/selectors'
import { pausePlayTrack, receiveCurrentTrack } from '../../actions/current_track_actions';

const mapStateToProps = (state, ownProps) => {
  let indexTracks = Object.keys(state.entities.tracks).map(id => state.entities.tracks[id]);
  // debugger;
  return {
    tracks: firstTwelveTracks(indexTracks),
    currentTrack: state.currentTrack,
    loading: state.uiLoading
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllTracks: () => dispatch(fetchAllTracks()),
  receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track)),
  pausePlayTrack: () => dispatch(pausePlayTrack())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LandingPageIndex)
);


