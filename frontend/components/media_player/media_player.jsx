import React from 'react';
import ReactPlayer from 'react-player';

class MediaPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      played: 0,
      playButtonClass: 'media-play-button',
      volume: 1,
      lengthTrack: 0,
      inSeek: false
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
    if (!this.state.inSeek) this.setState(state);
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
            width="0px"
            height="0px"
          />
          <div className="media-player-buttons">
            {/* <i className="fas fa-step-backward backward"></i> */}
            <button
              className="backward">
            </button>
            <button 
              className={this.state.playButtonClass}
              onClick={this.pausePlay}>
            </button>
            <button 
              className="forward">
            </button>
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
                // onMouseOver={this.showSlider}
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
            <div className="volume-icon"></div>
            <div className="volume-line-box">
              <div className="volume-line"></div>
            </div>
            <input className="volume-slider" type="range" 
              // orient="vertical"
              step="any" min="0" 
              max="1" 
              // style={Object.assign({},{position: 'absolute'}, 
              // {height: '90px'}, {width: '3px'}, {bottom: '35px'},
              // {right: '105px'})}
              value={this.state.volume}
              onChange={this.changeVolume}
            />
          </div>
          <div className="player-info-box">
            <div >
              <img className="player-album" src={this.props.track.album_url}></img>
            </div>
            <div className="player-title-user">
              <h4 className="player-user">
                {this.props.track.user}
              </h4>
              <h3 className="player-title">
                {this.props.track.title}
              </h3>
            </div>
          </div>
        </div>
      </div> 
    );
  }

}

export default MediaPlayer;