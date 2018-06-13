import React from 'react';
import WaveSurfer from 'wavesurfer.js';

class WaveForm extends React.Component {

  constructor (props) {
    super(props);
    this.state = { duration: "" };
    // this.convertedTime = this.convertedTime.bind(this);
  }
  
  componentWillReceiveProps(newProps) {
    if (newProps.playing && newProps.currentTrack.id === newProps.track.id) {
      this.wavesurfer.play();
    } else {
      this.wavesurfer.pause();
    }
    if (newProps.setWaveformTo !== this.props.setWaveformTo 
    && newProps.currentTrack.id === newProps.track.id) {
      let seekTime = newProps.setWaveformTo;
      // if (newProps.setWaveformTo > 1.0) {
      //   seekTime = seekTime/this.wavesurfer.getDuration();
      // }
      console.log(Math.round(seekTime * 10000) / 10000);
      this.wavesurfer.seekTo(Math.round(seekTime*100000)/100000);
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
      this.setState({duration: this.convertedTime(this.wavesurfer.getDuration())});
      if (this.props.currentTrack.id === this.props.track.id) {
        let seekTime = this.props.setWaveformTo;
        console.log(this.props.currentTime.played);
        this.wavesurfer.seekTo(Math.round((this.props.currentTime.played + 0.001) * 1000000) / 1000000);
      }
      // this.duration = this.convertedTime();
    });
  }

  // componentWillUnmount () {
  //   const time = this.wavesurfer.getCurrentTime();
  //   const duration = this.wavesurfer.getDuration();
  //   this.props.setWaveform(time/duration);
  // }


  convertedTime(seconds) {
    let date = new Date(null);
    // alert(date.setSeconds(this.state.duration)
    //   .toString().slice(20, 24));
    // console.log(seconds);
    date.setSeconds(Math.floor(seconds));
    return date.toString().slice(20,24);
    // return 55;
  }
  
  render () {
    let width = this.props.height === 60 ? '600px' : '780px';
    let lineClass = this.props.height === 60 ? 'waveform-line' :
      'waveform-show-line';
    let timeClass = this.props.height === 60 ? 'waveform-time-index' : 'waveform-time-show';
    let duration = this.duration ? this.duration : "";
    return (
      <div className="waveform-container" style={{width}}>
        <div id={`waveform-${this.props.track.id}`}></div>
        <div className={timeClass}>{this.state.duration}</div>
        <div className={lineClass}></div>
      </div>
    );
  }
}
export default WaveForm;