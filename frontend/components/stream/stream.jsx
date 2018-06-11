import React from 'react';
import NavContainer from "../nav/nav_container";
import MainStream from './main_stream';
import MediaPlayerContainer from '../media_player/media_player_container';

class Stream extends React.Component {
  render () {
    return (
      <div>
        <NavContainer />
        <div className="main">
          <div className="main-content">
            <MainStream />
          </div>
        </div>
        
          
        
      </div>
    );
  }
}

export default Stream;