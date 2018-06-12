import React from 'react';
import { Link } from 'react-router-dom';

class SidebarIndexItem extends React.Component {

  render () {
    const { track } = this.props;
    return (
      <li className="sidebar-index-item">
        <div className="sidebar-album-link">
          <Link to={`/tracks/${track.id}`} >
            <img className="sidebar-album-img" src={track.album_url} alt="album-cover" />
          </Link>
        </div>
        <div className="sidebar-item-links">
          <Link className="sidebar-item-artist" to={`/users/${track.user_id}`}>
            {track.user}
          </Link>
          <Link className="sidebar-item-title" to={`/tracks/${track.id}`}>
            {track.title}
          </Link>
        </div>
      </li>
    );
  }
}
export default SidebarIndexItem;