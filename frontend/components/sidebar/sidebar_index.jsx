import React from 'react';
import SidebarIndexItem from './sidebar_index_item';

class SidebarIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllTracks();
  }

  render() {

    return (
      <div className="sidebar-content">
        <header className="sidebar-header">
          <h4 className="sidebar-suggested">
            <i className="fas fa-headphones headphones"></i>Suggested Tracks
          </h4>
        </header>
        <ul className="sidebar-index-list">

          {this.props.tracks.map(track => (
            <SidebarIndexItem key={track.id}
              track={track} currentUser={this.props.currentUser}
              />
          ))}
        </ul>
      </div>
    );
  }

}

export default SidebarIndex;