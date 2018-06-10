import {
  connect
} from 'react-redux';
import SidebarIndex from './sidebar_index';
import {
  fetchAllTracks,
  deleteTrack
} from '../../actions/track_actions';
import {
  withRouter
} from 'react-router';
import { selectBottomTracks } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => {
  let indexTracks = Object.keys(state.entities.tracks).map(id => state.entities.tracks[id])
  return {
    tracks: selectBottomTracks(state, indexTracks),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllTracks: () => dispatch(fetchAllTracks()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SidebarIndex)
);
