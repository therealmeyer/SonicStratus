import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';


class TrackIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      playButtonClass: 'paused-button'
    };
    this.togglePlay = this.togglePlay.bind(this);

  }

  togglePlay () {
    if (this.state.playButtonClass === 'paused-button') {
      this.setState( { playButtonClass: 'played-button'});
    } else {
      this.setState( { playButtonClass: 'paused-button'});
    }
  }

  render () {
    console.log(this.props.track.album_url);
    console.log(this.props.track.audio_url);
    const { track } = this.props;
    return (
      <div>
        <div className="album-cover-link">
          <Link to="#" >
            <img className="album-img" src={track.album_url} alt="album-cover" />
          </Link>
        </div>
        <div className="song-item">
          <div className={this.state.playButtonClass} onClick={this.togglePlay}>
          </div>
          <Link className="song-item-artist" to={`/user/${track.user_id}`}>
            {track.user}
          </Link>
          <Link className="song-item-title" to={`/tracks/${track.id}`}>
            {track.title}
          </Link>
        </div>
      </div>
    );
  }
}

export default TrackIndexItem;
