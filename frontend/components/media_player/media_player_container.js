import { connect } from 'react-redux';
import { receiveCurrentTrack, 
  pausePlayTrack, 
  setPlayerTo, 
  setTime,
  setWaveformTo,
  endCurrentTrack } from '../../actions/current_track_actions';

import MediaPlayer from './media_player';

const mapStateToProps = state => ({
  track: state.currentTrack.track,
  playing: state.currentTrack.playing,
  setPlayerTo: state.currentTrack.setPlayerTo,
  //setWaveformTo: state.currentTrack.setWaveformTo
});

const mapDispatchToProps = (dispatch) => ({
  receiveCurrentTrack: track => dispatch(receiveCurrentTrack(track)),
  playPause: () => dispatch(pausePlayTrack()),
  setWaveform: time => dispatch(setWaveformTo(time)),
  endCurrentTrack: () => dispatch(endCurrentTrack()),
  setTime: time => dispatch(setTime(time)),
  // setWaveformTo: time => dispatch(setWaveformTo(time))
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaPlayer);