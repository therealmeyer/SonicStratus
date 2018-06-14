import React from 'react';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllTracks(); 
    window.scrollTo(0, 0);
  }

  render() {

    return (
      <div>
        <header className="stream-header">
          <h1 className="stream-title">Stream</h1>
        </header>
        <ul className="track-index-list">
          
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

export default TrackIndex;