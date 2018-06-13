import React from 'react';
import TrackIndexItem from '../tracks/track_index_item';

class UserIndex extends React.Component {

  componentDidMount() {
    this.props.fetchUserTracks(this.props.match.params.userId);
  }

  render() {
    if (!this.props.tracks) {
      return <div>Loading</div>
    }
    // debugger;
    return (
      <div>
        <header className="user-tracks-header">
          <h1 className="user-tracks-title">Tracks</h1>
        </header>
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
      </div>
    );
  }

}

export default UserIndex;