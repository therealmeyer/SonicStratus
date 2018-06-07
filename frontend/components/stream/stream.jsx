import React from 'react';
import NavContainer from "../nav/nav_container";
import MainStream from './main_stream';
import TrackIndexContainer from '../tracks/track_index_container';

class Stream extends React.Component {
  render () {
    return (
      <div className="stream-page">
        <NavContainer />
        <MainStream />
        {/* <TrackIndexContainer /> */}
      </div>
    );
  }
}

export default Stream;