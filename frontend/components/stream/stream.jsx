import React from 'react';
import NavContainer from "../nav/nav_container";
import MainStream from './main_stream';


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