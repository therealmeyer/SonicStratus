import React from 'react';

class LandingPageIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    const { track } = this.props;
    return (
      <li className="lp-index-item">
        <div className="lp-album-cover">
          <img className="lp-album-image" src={track.album_url} alt="album-cover"/>
        </div>
        <h3 className="lp-title">{track.title}</h3>
        <h4 className="lp-artist">{track.user}</h4>
      </li>
    );
  }

}

export default LandingPageIndexItem;


