import React from 'react';
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

  deleteButton() {
    if (this.props.currentUser.username === this.props.track.user) {
      return (<button className="delete-button" onClick={() => this.props.deleteTrack(this.props.track.id)}>
      <i className="fas fa-trash trash"></i> Delete</button>);
    } else {
      return <div></div>;
    }
  }

  editLink() {
    if (this.props.currentUser.username === this.props.track.user) {
      return <Link className="edit-track" to={`/tracks/${this.props.track.id}/edit`}>
        <i className="fas fa-pencil-alt pencil" />Edit
        </Link>;
    } else {
      return <div></div>;
    }
  }

  genre() {
    if (this.props.track.genre) {
      return <div className="track-item-genre"># {this.props.track.genre}</div>;
    } else {
      return <div></div>;
    }
  }

  render () {
    // console.log(this.props.track.album_url);
    // console.log(this.props.track.audio_url);
    // debugger;
    const { track } = this.props;
    const genre = track.genre ? `#${track.genre}` : ""
    // debugger;
    return (
      <li className="track-index-item">
        <div className="album-cover-link">
          <Link to="#" >
            <img className="album-img" src={track.album_url} alt="album-cover" />
          </Link>
        </div>
        <div className="track-item">
          <div className={this.state.playButtonClass} onClick={this.togglePlay}>
          </div>
          <div className="track-item-links">
            <Link className="track-item-artist" to={`/users/${track.user_id}`}>
              {track.user}
            </Link>
            <Link className="track-item-title" to={`/tracks/${track.id}`}>
              {track.title}
            </Link>
          <div className="waveform">Waveform placeholder</div>
          </div>
        </div>
          <div className="track-item-buttons">
            {this.editLink()}
            {this.deleteButton()}
          </div>
            {this.genre()}
          
      </li>
    );
  }
}

export default TrackIndexItem;
