import React from 'react';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllTracks(); 
  }

  render() {

    return (
      <div>
        <header className="stream-header">
          <h1 className="stream-title">Stream</h1>
        </header>
        <ul className="track-index-list">
          
          {this.props.tracks.map(track => (
            <TrackIndexItem key={track.id} 
            track={track} currentUser={this.props.currentUser} 
            deleteTrack={this.props.deleteTrack}/>
          ))}
        </ul>
      </div>
    );
  }

}

export default TrackIndex;