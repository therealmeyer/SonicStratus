import { connect } from 'react-redux';
import { receiveCurrentTrack, 
  pausePlayTrack, 
  setPlayerTo, 
  setTime } from '../../actions/current_track_actions';

import MediaPlayer from './media_player';

const mapStateToProps = state => ({
  track: state.currentTrack.track,
  playing: state.currentTrack.playing,
  setPlayerTo: state.currentTrack.setPlayerTo
});

const mapDispatchToProps = (dispatch) => ({
  receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track)),
  playPause: () => dispatch(pausePlayTrack()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaPlayer);