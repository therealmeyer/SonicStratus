import React from 'react';

class LandingPageIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playButtonClass: 'landing-play-button'
    }; 
  
    this.togglePlay = this.togglePlay.bind(this);
  }

  componentWillReceiveProps(newProps) {
    // debugger;
    if (newProps.currentTrack.track.id === newProps.track.id &&
      newProps.currentTrack.playing) {
      this.setState({ playing: true, playButtonClass: 'landing-paused-button' });

    } else {
      this.setState({ playing: false, playButtonClass: 'landing-play-button' });
    }
  }

  togglePlay() {
    if (this.props.currentTrack.track.id === -1 ||
      this.props.currentTrack.track.id !== this.props.track.id) {
      this.props.receiveCurrentTrack(this.props.track);
    }
    if (this.props.currentTrack.track.id !== this.props.track.id &&
      this.props.currentTrack.playing) {
    } else {
      this.props.pausePlayTrack(!this.props.currentTrack.playing);
    }
  }

  render () {
    const { track } = this.props;
    return (
      <li className="lp-index-item">
        <div className="lp-album-cover">
          <img className="lp-album-image" src={track.album_url} alt="album-cover"/>
          <div className={this.state.playButtonClass} onClick={this.togglePlay} />
        </div>
        <h3 className="lp-title">{track.title}</h3>
        <h4 className="lp-artist">{track.user}</h4>
      </li>
    );
  }

}

export default LandingPageIndexItem;


