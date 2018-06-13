import Waveform from './waveform';
import { connect } from 'react-redux';
import { setPlayerTo, setWaveformTo } from '../../actions/current_track_actions';

const mapStateToProps = state => ({
  currentTrack: state.currentTrack.track,
  playing: state.currentTrack.playing,
  currentTime: state.currentTrack.currentTime,
  setWaveformTo: state.currentTrack.setWaveformTo
});

const mapDispatchToProps = dispatch => ({
  setPlayerTo: time => dispatch(setPlayerTo(time)),
  setWaveform: time => dispatch(setWaveformTo(time))
});

export default connect(mapStateToProps, mapDispatchToProps)(Waveform);