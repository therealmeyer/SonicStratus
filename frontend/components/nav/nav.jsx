import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeClass: 'stream',
    };
  }

  // componentWillReceiveProps(newProps) {
    
  // }

  render () {
    // console.log(this.props);
    if (!this.props.currentUser) {
      return <div></div>;
    }
    // console.log("navprops", this.props);
    // debugger;
    let profileImg = this.props.currentUser.profile_img_url === "/profile_images/original/missing.png" ?
      'linear-gradient(135deg, #846170, #70929c)' : `url(${this.props.currentUser.profile_img_url})`;
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
                  <span className="user-image-nav" style={{backgroundImage: profileImg}}></span>
                  <Link className="current-user" to={`/users/${this.props.currentUser.id}`}>
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
