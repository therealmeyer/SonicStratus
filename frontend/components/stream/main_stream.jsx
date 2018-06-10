import React from 'react';
import TrackIndexContainer from "../tracks/track_index_container";
import SidebarContainer from '../sidebar/sidebar_container';
class MainStream extends React.Component {

  render() {
    return (
      <div className="main-stream">
        
        <div className="track-content"> 
          <TrackIndexContainer />
          <SidebarContainer />
        </div>
      </div>
    )
  }


}

export default MainStream;