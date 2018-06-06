import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    // console.log(this.props);
    return <div>
        <header className="nav">
          <section className="nav-inner">
            <ul className="nav-left">
              <li className="nav-logo">
                <Link className="nav-logo-link" to="/stream">
                  SoundStratus
                </Link>
              </li>
              <li className="stream">
                <Link className="stream-link" to="/stream">Home</Link>
              </li>
            </ul>
            <div className="nav-middle">
              <div className="nav-search">
                <form className="nav-search-form">
                  <input className="nav-search-input" 
                  placeholder="Search for artists, bands, tracks, podcasts"
                  type="search"/>
                  <button className="nav-search-submit"></button>
                </form>
              </div>
            </div>
            <div className="nav-right">
              <ul className="nav-right-links">
                <li><Link className="upload" to="/upload">Upload</Link></li>
                <li>
                  <span className="user-image-nav"></span>
                  <Link className="current-user" to={`/users/${this.props.currentUser.username}`}>
                    {this.props.currentUser.username}
                  </Link>
                </li>
                <li><button className="logout-button" onClick={this.props.logout}>Logout</button></li>
              </ul>
            </div>
          </section>
        </header>
      </div>;
  }
}

export default Nav;
