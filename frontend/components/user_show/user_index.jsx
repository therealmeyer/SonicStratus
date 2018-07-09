import React from 'react';
import TrackIndexItem from '../tracks/track_index_item';

class UserIndex extends React.Component {

  componentDidMount() {
    this.props.fetchUserTracks(this.props.match.params.userId);
  }

  tracks () {
    if (this.props.tracks.length === 0) {
      return (
        <div className="user-nothing-list">
          <div className="nothing-image"></div>
          <p className="nothing-text">Nothing to hear here</p>

        </div>
      );
    }
    else {
      return (
      <ul className="user-index-list">

        {this.props.tracks.map(track => (
          <TrackIndexItem
            key={track.id} track={track}
            currentUser={this.props.currentUser}
            currentTrack={this.props.currentTrack}
            deleteTrack={this.props.deleteTrack}
            receiveCurrentTrack={this.props.receiveCurrentTrack}
            pausePlayTrack={this.props.pausePlayTrack}
          />
        ))}
      </ul>
      );
    }
  }

  render() {
    if (!this.props.tracks) {
      return <div>Loading</div>
    }
    return (
      <div>
        <header className="user-tracks-header">
          <h1 className="user-tracks-title">Tracks</h1>
        </header>
        {this.tracks()}
      </div>
    );
  }

}

export default UserIndex;