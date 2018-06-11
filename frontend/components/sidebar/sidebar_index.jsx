import React from 'react';
import SidebarIndexItem from './sidebar_index_item';

class SidebarIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllTracks();
  }

  render() {

    return <div className="sidebar-content">
        <header className="sidebar-header">
          <h4 className="sidebar-suggested">
            <i className="fas fa-headphones headphones" />Suggested Tracks
          </h4>
        </header>
        <ul className="sidebar-index-list">
          {this.props.tracks.map(track => (
            <SidebarIndexItem
              key={track.id}
              track={track}
              currentUser={this.props.currentUser}
            />
          ))}
        </ul>
        <header className="sidebar-header">
          <h4 className="sidebar-suggested">Profile</h4>
        </header>
          <ul className="profile-links">
            <li>
            <a href="https://github.com/therealmeyer" className="github-link">
              <i className="fab fa-github github"></i>
              </a>
            </li>
            <li>
            <a href="https://www.linkedin.com/in/ryanlmeyer/" className="linkedin-link">
              <i className="fab fa-linkedin linkedin"></i>
              </a>
            </li>
          </ul>
        
      </div>;
  }

}

export default SidebarIndex;