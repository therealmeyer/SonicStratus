import React from 'react';
import NavContainer from '../nav/nav_container';
import {Link} from 'react-router-dom';
import WaveFormContainer from '../waveform/waveform_container';
import CommentIndexContainer from '../comments/comment_index_container';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playButtonClass: 'show-play-button',
      body: ""
    };
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
    this.trackButtons = this.trackButtons.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.updateComment = this.updateComment.bind(this);
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId)
      .then((track) =>this.props.fetchUser(this.props.track.user_id));
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps (newProps) {
    // debugger;
    if (newProps.currentTrack.playing &&  
      newProps.currentTrack.track.id === this.props.track.id) {
      this.setState({ playButtonClass: 'show-pause-button' });
    } else {
      this.setState({playButtonClass: 'show-play-button'});
    }
  }

  trackButtons() {
    // debugger;
    if (this.props.track.user_id === this.props.currentUser.id) {
      return (
      <div className="show-track-buttons">
        <Link className="edit-track" to={`/tracks/${this.props.track.id}/edit`}>
          <i className="fas fa-pencil-alt pencil" />Edit
        </Link>
        <button className="delete-button" 
          onClick={() => this.props.deleteTrack(this.props.track.id)}>
          <i className="fas fa-trash trash"></i> Delete</button>
      </div>
      );
    }
  }

  handleSubmitComment(e) {
    // e.preventDefault();
    if (e.key === 'Enter') {
      this.props.createComment(
        { body: this.state.body,
          track_id: this.props.track.id,
          user_id: this.props.currentUser.id
        }
      );
      this.setState({body: ""});
    }
  }

  updateComment(e) {
    this.setState({ body: e.currentTarget.value});
  }

  genre() {
    if (this.props.track.genre) {
      return <div className="show-track-genre"># {this.props.track.genre}</div>;
    } else {
      return <div></div>;
    }
  }

  togglePlay () {
    if (this.props.currentTrack.track.id === -1 ||
      this.props.currentTrack.track.id !== this.props.track.id) {
      this.props.receiveCurrentTrack(this.props.track);
    }
    if (this.props.currentTrack.track.id !== this.props.track.id &&
      this.props.currentTrack.playing) {
    } else {
      this.props.pausePlayTrack(!this.props.currentTrack.playing);
    }
  }


  render () {
    if (!this.props.track || !this.props.users[this.props.track.user_id]) {
      return (<h1>Loading...</h1>)
    }
    let genre = this.props.track.genre ? `# ${this.props.track.genre}` : "";
    // console.log(this.props);
    let user = this.props.users[this.props.track.user_id];
    return <div>
        <div className="main">
          <div className="main-content-show">
            {/* <h1 /> */}
            <div className="showBox">
              <div className="backgroundGradient">
                <div className="track-show-info">
                  <div onClick={this.togglePlay} className={this.state.playButtonClass} />
                  <div className="track-show-title-user">
                    <div className="wrapper">
                      <div className="show-track-user">
                        {this.props.track.user}
                      </div>
                    </div>
                    <div className="show-track-title">
                      {this.props.track.title}
                    </div>
                  </div>
                </div>
                <div className="show-genre-year">
                  <div className="show-track-year">2 years ago</div>
                  {this.genre()}
                </div>
                <div className="show-album-img">
                  <img src={this.props.track.album_url} />
                </div>
              </div>
              <div className="show-waveform-container">
                <WaveFormContainer height={110} track={this.props.track} color={"#fff"} />
              </div>
            </div>
            <div className="comments-box">
              <div className="comment-form-box">
                <div className="comment-form">
                  <img className="form-img" src={this.props.currentUser.profile_img_url} />
                  <div className="comment-input-box">
                    <form onSubmit={this.handleSubmit}>
                      <input 
                        className="comment-input" 
                        type="text" 
                        value={this.state.body}
                        onChange={this.updateComment}
                        placeholder="Write a comment" 
                        onKeyPress={this.handleSubmitComment}
                      />
                    </form>
                  </div>
                </div>
                {this.trackButtons()}
              </div>
              <div className="flex-box">
                <div className="flex-comments-info">
                  <div className="info-description-box">
                    <div className="show-user-info">
                      <div className="user-image-track">
                        <img className="circle-user-image" src={this.props.users[this.props.track.user_id].profile_img_url} />
                      </div>
                      <div className="star-wrapper">
                        <Link className="user-circle-link" to={`/users/${user.id}`}>
                          {user.username}
                        </Link>
                        <div className="star-img"></div>
                      </div>
                    </div>
                    <div className="description-box"> 
                      <p className="track-description">{this.props.track.description}</p>
                    </div>
                  </div>
                  <CommentIndexContainer />
                </div>
                <div className="sidebar-flex">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }

}

export default TrackShow;