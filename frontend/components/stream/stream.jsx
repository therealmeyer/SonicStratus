import React from 'react';
import NavContainer from "../nav/nav_container";
import MainStream from './main_stream';
import TrackIndexContainer from '../tracks/track_index_container';

class Stream extends React.Component {
  render () {
    return (
      <div>
        <NavContainer />
        <div className="main">
          <div className="main-content">
            <MainStream />
            <TrackIndexContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Stream;