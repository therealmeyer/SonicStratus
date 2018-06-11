import React from 'react';
import NavContainer from '../nav/nav_container';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId);
  }

  render () {
    if (!this.props.track) {
      return (<h1>Im loading! hold on! </h1>)
    }

    return (
      <div> 
        <div className="main">
          <div className="main-content">
            <h1>{this.props.track.title}</h1>
          </div>
        </div>
      </div>
    );
  }

}

export default TrackShow;