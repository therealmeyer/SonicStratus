import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeClass: 'stream',
    };
    // this.checkPath = this.checkPath.bind(this);
  }

  // checkPath() {
  //   if (this.props.path === '/stream') {
  //     this.setState({homeClass: 'stream-link-highlight'});
  //   } 
  // }

  render () {
    // console.log(this.props);
    if (!this.props.currentUser) {
      return <div></div>;
    }
    return <div>
        <header className="nav">
          <section className="nav-inner">
            <ul className="nav-left">
              <li className="nav-logo">
                <Link className="nav-logo-link" to="/stream">
                  SoundStratus
                </Link>
              </li>
              <li className={this.props.path === "/stream" ? "stream-link-highlighted" : "stream"}>
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
                <li className="upload-link">
                  <Link className="upload" to="/upload">Upload</Link>
                </li>
                <li className="user-link">
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
