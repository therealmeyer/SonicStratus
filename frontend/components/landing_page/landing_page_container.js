import { connect } from 'react-redux';
import LandingPageIndex from './landing_page_index';
import { fetchAllTracks} from '../../actions/track_actions';
import { withRouter } from 'react-router';
import { firstTwelveTracks } from '../../reducers/selectors'

const mapStateToProps = (state, ownProps) => {
  let indexTracks = Object.keys(state.entities.tracks).map(id => state.entities.tracks[id]);
  // debugger;
  return {
    tracks: firstTwelveTracks(indexTracks),
    loading: state.uiLoading
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllTracks: () => dispatch(fetchAllTracks())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LandingPageIndex)
);


