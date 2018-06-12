import Waveform from './waveform';
import { connect } from 'react-redux';
import { setPlayerTo } from '../../actions/current_track_actions';

const mapStateToProps = state => ({
  currentTrack: state.currentTrack.track,
  playing: state.currentTrack.playing,
  currentTime: state.currentTrack.currentTime,
  setWaveformTo: state.currentTrack.setWaveformTo
});

const mapDispatchToProps = dispatch => ({
  setPlayerTo: time => dispatch(setPlayerTo(time))
});

export default connect(mapStateToProps, mapDispatchToProps)(Waveform);