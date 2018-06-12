import React from 'react';
import WaveSurfer from 'wavesurfer.js';

class WaveForm extends React.Component {
  
  componentWillReceiveProps(newProps) {
    if (newProps.playing && newProps.currentTrack.id === newProps.track.id) {
      this.wavesurfer.play();
    } else {
      this.wavesurfer.pause();
    }
    if (newProps.setWaveformTo !== this.props.setWaveformTo 
    && newProps.currentTrack.id === newProps.track.id) {
      let seekTime = newProps.setWaveformTo;
      if (newProps.setWaveformTo > 1.0) {
        seekTime = seekTime/this.wavesurfer.getDuration();
      }
      this.wavesurfer.seekTo(seekTime);
    }
  }

  componentDidMount () {
    this.wavesurfer = WaveSurfer.create({
      container: `#waveform-${this.props.track.id}`,
      progressColor: '#f50',
      height: this.props.height,
      cursorWidth: 0,
      barHeight: 1,
      barWidth: 2,
      waveColor: this.props.color
    });
    this.wavesurfer.load(this.props.track.audio_url);
    this.wavesurfer.setMute(true);
    this.wavesurfer.on('seek', e => {
      if (this.props.track.id === this.props.currentTrack.id) {
        this.props.setPlayerTo(e);
      }
    });
    this.wavesurfer.on('ready', () => {
      // alert(this.wavesurfer.getDuration());
    });
  }
  
  render () {
    let width = this.props.height === 60 ? '600px' : '780px';
    let lineClass = this.props.height === 60 ? 'waveform-line' :
      'waveform-show-line';
    return (
      <div className="waveform-container" style={{width}}>
        <div id={`waveform-${this.props.track.id}`}></div>
        <div className="waveform-time"></div>
        <div className={lineClass}>{this.duration}</div>
      </div>
    );
  }
}
export default WaveForm;