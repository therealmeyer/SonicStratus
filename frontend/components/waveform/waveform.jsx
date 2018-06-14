import React from 'react';
import WaveSurfer from 'wavesurfer.js';
import {sampleData} from './waveform_const';
class WaveForm extends React.Component {

  constructor (props) {
    super(props);
    this.state = { duration: null };
    // this.convertedTime = this.convertedTime.bind(this);
  }
  
  componentWillReceiveProps(newProps) {
    // debugger;
    if (newProps.playing && newProps.currentTrack.id === newProps.track.id) {
      this.wavesurfer.play();
      // this.wavesurfer.skip(newProps.currentTime.played);
    } else {
      this.wavesurfer.pause();
    }
    if (newProps.setWaveformTo !== this.props.setWaveformTo 
    && newProps.currentTrack.id === newProps.track.id) {
      let seekTime = newProps.setWaveformTo;
      // if (newProps.setWaveformTo > 1.0) {
      //   seekTime = seekTime/this.wavesurfer.getDuration();
      // }
      console.log(seekTime);
      console.log(Math.round(seekTime * 10000) / 10000);
      this.wavesurfer.seekTo(Math.round(seekTime*100000)/100000);
    }
    this.setState({duration: this.props.track.duration});

    // this.wavesurfer.on('finish', () => {
    //   debugger;
    //   this.wavesurfer.stop();
    //   this.wavesurfer.pause();
    // });
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
    
    //Loading waveform
    this.wavesurfer.load(this.props.track.audio_url);

    // if (this.props.track.peaks.length < 1) {
    //   this.wavesurfer.load(this.props.track.audio_url);
    // } else {
    //   this.wavesurfer.load(this.props.track.audio_url, this.props.track.peaks);
    // }


    this.wavesurfer.setMute(true);
    // seek to correct time on mount
    if (this.props.currentTrack.id === this.props.track.id) {
      // console.log(this.props.currentTime.played * this.wavesurfer.getDuration());
      
      // this.wavesurfer.skip(25);
      // this.wavesurfer.skip(Math.round((this.props.currentTime.played + 0.001) * 1000000) / 1000000);
      // console.log(Math.round((this.props.currentTime.played + 0.001) * 1000000) / 1000000);
    }
    this.wavesurfer.on('seek', e => {
      if (this.props.track.id === this.props.currentTrack.id) {
        this.props.setPlayerTo(e);
      }
    });
    this.wavesurfer.on('ready', () => {
      this.setState({ duration: this.convertedTime(this.wavesurfer.getDuration()) });
      // let currentTime = this.props.currentTime.played;
      // if (this.props.currentTrack.id === this.props.track.id) {
      //   console.log("duration", this.state.duration);
      //   console.log("current*duration", currentTime * this.state.duration);
      //   this.wavesurfer.setCurrentTime(this.props.currentTime.played * this.state.duration);
      // }
      // let state = this.state.duration;
      // debugger;
      // if (!this.track.duration) {
      //   this.setState({duration: this.convertedTime(this.wavesurfer.getDuration())});
      //   const formData = new FormData();
      //   formData.append("track[id]", this.props.track.id);
      //   formData.append("track[duration]", this.state.duration);
      //   this.props.updateTrack(formData).then(payload => {
      //     // debugger;
      //     this.setState({ duration: payload.track.duration });
      //   });
      // }
      // debugger;
      // if (this.props.track.peaks.length < 1) {
      //   const peaks = this.wavesurfer.exportPCM(1024,1000000,false,0);
      //   const formData = new FormData();
      //   formData.append("track[id]", this.props.track.id);
      //   formData.append("track[peaks]", peaks);
        
      //   this.props.updateTrack(formData);
      // }
      
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
    // debugger;
    let width = this.props.height === 60 ? '600px' : '780px';
    let lineClass = this.props.height === 60 ? 'waveform-line' :
      'waveform-show-line';
    let timeClass = this.props.height === 60 ? 'waveform-time-index' : 'waveform-time-show';
    let duration = this.state.duration ? this.state.duration : "";
    return (
      <div className="waveform-container" style={{width}}>
        <div id={`waveform-${this.props.track.id}`} ></div>
        <div className={timeClass}>{duration}</div>
        <div className={lineClass}></div>
      </div>
    );
  }
}
export default WaveForm;