import React from 'react';
import LandingPageIndexItem from './landing_page_index_item';

class LandingPageIndex extends React.Component {

  componentWillMount() {
    this.props.fetchAllTracks();
  }

  render() {

    return (
      !this.props.loading && 
      <div>
        <ul className="landing-page-index-list">

          {this.props.tracks.map(track => (
            <LandingPageIndexItem 
              key={track.id}
              currentTrack={this.props.currentTrack}
              receiveCurrentTrack={this.props.receiveCurrentTrack}
              pausePlayTrack={this.props.pausePlayTrack}
              track={track}
             />
          ))}
        </ul>
      <div className="top-button-box">
        <button className="top-button" onClick={this.props.openModal}>Explore our top 50</button>
      </div>
      </div>
    );
  }

}

export default LandingPageIndex;