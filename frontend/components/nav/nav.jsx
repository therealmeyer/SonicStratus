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
      loading: false,
      cursor: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
    this.renderResults = this.renderResults.bind(this);
    this.hideResults = this.hideResults.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.clearCursor = this.clearCursor.bind(this);
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
    if (e.keyCode === 13 || e.keyCode === 40 || e.keyCode === 38) {
      e.preventDefault();
      return;
    }
    if (!this.props.currentUser.username) {
      this.signInSearch();
    }
    if (e.target.value === "") {
      this.props.clearSearch();
      this.setState({ query: e.target.value, display: false, loading: false, cursor: null});
    } else {
      this.setState({ query: e.target.value, display: true, loading: true});
    }
  }

  handleKeyDown(e) {
    
    const { cursor } = this.state;
    const { searchResults } = this.props;
    // arrow up/down button should select next/previous list element
    if (e.keyCode === 38 && cursor && cursor > 0 ) {
      e.preventDefault();
      this.setState(prevState => ({
        cursor: prevState.cursor - 1
      }))
    } 
    else if (e.keyCode === 40 && cursor === null) {
      e.preventDefault();
      this.setState({ cursor: 0 });
    }
    else if (e.keyCode === 40 && cursor < searchResults.length - 1) {
      e.preventDefault();
      this.setState(prevState => ({
        cursor: prevState.cursor + 1
      }))
    }
    else if (e.keyCode === 13 && cursor !== null) {
      e.preventDefault();
      const item = searchResults[cursor] 
      if (item.searchable_type === "User") {
        window.location.href = `/#/users/${item.searchable_id}`;
        this.setState({ query: e.target.value, display: false, loading: false, cursor: null });
      } else if (item.searchable_type === "Track") {
        window.location.href = `/#/tracks/${item.searchable_id}`;
        this.setState({ query: e.target.value, display: false, loading: false, cursor: null });
      }
    }
  }

  clearCursor() {
    this.setState({ cursor: null });
  }

  fetchResults() {
    const { query } = this.state;
    this.props.fetchSearch(query).then( () => this.setState({loading: false}));
  }

  hideResults() {
    setTimeout( () => this.setState({display: false, cursor: null}), 50);
  }

  renderResults() {
    const { searchResults } = this.props;
    if (searchResults && this.state.display) {
      return <SearchIndex display={this.state.display} query={this.state.query} results={searchResults} clearCursor={this.clearCursor} index={this.state.cursor}/>
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
                  onKeyDown={this.handleKeyDown}
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
