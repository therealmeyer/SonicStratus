import React from 'react';
import NavContainer from "../nav/nav_container";
import MainStream from './main_stream';

class Stream extends React.Component {
  render () {
    return (
      <div className="stream-page">
        <NavContainer />
        <MainStream />
      </div>
    );
  }

}

export default Stream;