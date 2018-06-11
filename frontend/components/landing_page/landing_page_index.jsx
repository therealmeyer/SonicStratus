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
            <LandingPageIndexItem key={track.id}
              track={track}
             />
          ))}
        </ul>
      <div className="top-button-box">
        <button className="top-button">Explore our top 50</button>
      </div>
      </div>
    );
  }

}

export default LandingPageIndex;