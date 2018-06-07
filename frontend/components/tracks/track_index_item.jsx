import React from 'react';
import ReactPlayer from 'react-player';

class TrackIndexItem extends React.Component {
  render () {
    return <ReactPlayer url={this.props.track.audio_url} />
  }
}

export default TrackIndexItem;
