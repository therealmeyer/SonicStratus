import React from 'react';
import { Link } from 'react-router-dom';
import SearchIndex from '../search/search_index';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeClass: 'stream',
      query: "",
      display: false,
      loading: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
    this.renderResults = this.renderResults.bind(this);
    this.hideResults = this.hideResults.bind(this);
    
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setState({query: ""});
    }
  }
  handleSubmit(e) {
    e.preventDefault();
  }

  handleInput(e) {
    if (!this.props.currentUser.username) {
      this.signInSearch();
    }
    if (e.target.value === "") {
      this.props.clearSearch();
      this.setState({ query: e.target.value, display: false, loading: false});
    } else {
      this.setState({ query: e.target.value, display: true, loading: true});
    }
  }

  fetchResults() {
    const { query } = this.state;
    this.props.fetchSearch(query).then( () => this.setState({loading: false}));
  }

  hideResults() {
    setTimeout( () => this.setState({display: false}), 50);
  }

  renderResults() {
    const { searchResults } = this.props;
    if (searchResults && this.state.display) {
      return <SearchIndex display={this.state.display} query={this.state.query} results={searchResults} />
    } else {
      return null;
    }
  }

  render () {
    // console.log(this.props);
    if (!this.props.currentUser) {
      return <div></div>;
    }
    // console.log("navprops", this.props);
    // debugger;
    if (this.state.loading === true) this.fetchResults();
    let profileImg = this.props.currentUser.profile_img_url === "/profile_images/original/missing.png" ?
      'linear-gradient(135deg, #846170, #70929c)' : `url(${this.props.currentUser.profile_img_url})`;
    return <div>
        <header className="nav">
          <section className="nav-inner">
            <ul className="nav-left">
              <li className="nav-logo">
                <Link className="nav-logo-link" to="/stream">
                  SonicStratus
                </Link>
              </li>
              <li className={this.props.path === "/stream" ? "stream-link-highlighted" : "stream"}>
                <Link className="stream-link" to="/stream">Home</Link>
              </li>
            </ul>
            <div className="nav-middle">
              <div className="nav-search">
                <form onSubmit={this.handleSubmit} className="nav-search-form">
                  <input 
                  onFocus={() => (this.state.query.length > 0) ? this.setState({display: true}) : null}
                  onBlur={this.hideResults}
                  className="nav-search-input" 
                  placeholder="Search for artists, bands, tracks, podcasts"
                  onChange={this.handleInput}
                  value={this.state.query}
                  type="search" onSubmit={this.handleSubmit}/>
                  {this.state.loading === false || this.state.query !== "" ? this.renderResults() : null}
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
