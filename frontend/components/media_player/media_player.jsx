import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

class MediaPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      played: 0,
      playButtonClass: 'media-play-button',
      volumeClass: 'volume-icon',
      volume: 0.75,
      previousVolume: 0.75,
      lengthTrack: 0,
      inSeek: false,
      muted: false
    };
    this.pausePlay = this.pausePlay.bind(this);
    this.ref = this.ref.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.seekClick = this.seekClick.bind(this);
    this.seekUnClick = this.seekUnClick.bind(this);
    this.seekChange = this.seekChange.bind(this);
    this.formatTime = this.formatTime.bind(this);
    this.onDuration = this.onDuration.bind(this);
    this.onEnded = this.onEnded.bind(this);
    this.toggleMute = this.toggleMute.bind(this);
  }
  componentWillReceiveProps(newProps) {
    if (this.props.track.id !== newProps.track.id) {
      this.setState({url: newProps.track.audio_url}, () => this.player.seekTo(0.0));
    }
    if (!newProps.playing) this.setState({playButtonClass: 'media-play-button'});
    if (newProps.playing) this.setState({playButtonClass: 'media-pause-button'});
    if (newProps.setPlayerTo !== this.props.setPlayerTo) {
      this.player.seekTo(parseFloat(newProps.setPlayerTo));
      this.setState({played: parseFloat(newProps.setPlayerTo)});
    }
  }

  pausePlay () {
    if (this.props.track.id === -1) {
      return;
    } else {
      this.props.playPause();
    }
  }

  ref(player) {
    this.player = player;
  }

  onProgress(state) {
    if (!this.state.inSeek) {
      this.setState(state);
      this.props.setTime(state);
    }
  }

  changeVolume(e) {
    this.setState({ volume: parseFloat(e.target.value)});
  }

  seekClick() {
    this.setState({inSeek: true});
  }

  seekUnClick(e) {
    this.setState({inSeek: false});
    this.player.seekTo(parseFloat(e.target.value));
    //waveform handle
  }

  seekChange(e) {
    this.setState({played: parseFloat(e.target.value)});
    this.props.setWaveform(e.target.value);
    //waveform handle
  }

  formatTime(seconds) {
    let date = new Date(null);
    date.setSeconds(seconds);
    return (
      date.toTimeString().slice(4,8)
    );  
  }

  onDuration(duration) {
    this.setState({lengthTrack: duration})
  }

  onEnded() {
    this.props.endCurrentTrack();
    // this.props.setWaveformTo(0);
  }

  albumImage() {
    if (this.props.track.id === -1) {
      return <div className="player-album-placeholder"></div>;
    } else {
      return <img className="player-album" src={this.props.track.album_url} />;
    }
  }

  toggleMute() {
    if (this.state.muted) {
      this.setState({volumeClass: 'volume-icon'});
      this.setState({volume: this.state.previousVolume});
    } else {
      this.setState({previousVolume: this.state.volume});
      this.setState({ volumeClass: 'muted-icon' });
      this.setState({volume: 0});
    }
    this.setState({muted: !this.state.muted});
  }
  render () {
    return (
      <div className="media-player-box">
        <div className="media-player-controls">
          <ReactPlayer 
            url={this.state.url}
            playing={this.props.playing}
            ref={this.ref}
            onProgress={this.onProgress}
            onDuration={this.onDuration}
            volume={this.state.volume}
            width="0px"
            height="0px"
            onEnded={this.onEnded}
            muted={this.state.muted}
          />
          <div className="media-player-buttons">
            {/* <i className="fas fa-step-backward backward"></i> */}
            {/* <button
              className="backward">
            </button> */}
            <button 
              className={this.state.playButtonClass}
              onClick={this.pausePlay}>
            </button>
            {/* <button 
              className="forward">
            </button> */}
            {/* <i className="fas fa-step-forward forward"></i> */}
          </div>
          <div className="track-slider-box">
            <div className="track-current-time">
              {this.formatTime(Math.round(this.state.played*this.state.lengthTrack))}
            </div>
            <div className="track-slider">
              <input 
                className="track-progress"
                type='range' min={0} max={1}
                step='any' value={this.state.played}
                onMouseDown={this.seekClick}
                onMouseUp={this.seekUnClick}
                onChange={this.seekChange}
      
              />
              <div className="playback-slider-track"></div>
              <div 
                className="playback-progress"
                style={{"width": this.state.played*487}}>
              </div>
            </div>
            <div className="track-progress-length">
              {this.formatTime(Math.round(this.state.lengthTrack))}
            </div>
          </div>
          <div className="volume-wrapper">
            <div className="volume-modal">
              <div className={this.state.volumeClass} onClick={this.toggleMute}></div>
              <p className="pointer"></p>
              <div className="volume-content">
                <div className="volume-line-box">
                  <div className="volume-line"></div>
                </div>
                <input className="volume-slider" type="range" 
                  // orient="vertical"
                  step="any" min="0" 
                  max="1" 
                  
                  // orient="vertical"
                  // style={Object.assign({}, { position: 'absolute' },
                  // {height: '90px'},
                  // {width: '3px'},
                  // {bottom: '30px'},
                  // {right: '12px'})}
                  //
                  style={Object.assign({}, { position: 'absolute' },
                  {bottom: '45px'},
                  {right: '-24px'},
                  {width:'92px'})}
                  value={this.state.volume}
                  onChange={this.changeVolume}
                />
              </div>
            </div>
          </div>
          <div className="player-info-box">
            <div >
              {this.albumImage()}
            </div>
            <div className="player-title-user">
              {/* <Link to={`/users/${this.props.track.user.id}`}> */}
                <h4 className="player-user">
                  {this.props.track.user}
                </h4>
              {/* </Link> */}
              <Link to={`/tracks/${this.props.track.id}`}>
                <h3 className="player-title">
                  {this.props.track.title}
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div> 
    );
  }

}

export default MediaPlayer;