import React from 'react';
import UserIndexContainer from './user_index_container';
import SidebarContainer from '../sidebar/sidebar_container';
class UserShow extends React.Component {
  constructor(props) {
    super(props);
    
  
    this.state = {
      profileUrl: '', //this.props.user.profile_img_url,
      headerUrl: '', //this.props.user.header_img_url,
      backgroundProfileImg: '', //backgroundProfile || "linear-gradient(135deg, #846170, #70929c)",
      backgroundHeaderImg: '', // backgroundHeader || "linear-gradient(315deg, rgb(132, 97, 112) 0%, rgb(112, 146, 156) 100%)",
      profileImgFile: null,
      headerImgFile: null
    };
    this.handleProfileChange = this.handleProfileChange.bind(this);
    this.handleHeaderChange = this.handleHeaderChange.bind(this);
  }

  componentDidMount() {
    // debugger;
    this.props.fetchUser(this.props.match.params.userId);
    window.scrollTo(0,0);
  }

  componentWillReceiveProps(nextProps) {
    // debugger;
    let backgroundProfile = nextProps.user.profile_img_url === "/profile_images/original/missing.png" ?
      null :`url(${nextProps.user.profile_img_url}` ;
    let backgroundHeader = nextProps.user.header_img_url === "/header_images/original/missing.png"?
      `url(${nextProps.user.header_img_url}` : null;

    this.setState({
      profileUrl: nextProps.user.header_img_url, 
      headerUrl: nextProps.user.header_img_url,
      backgroundProfileImg: backgroundProfile || "linear-gradient(135deg, #846170, #70929c)",
      backgroundHeaderImg: backgroundHeader || "linear-gradient(315deg, rgb(132, 97, 112) 0%, rgb(112, 146, 156) 100%)"
    });
  }

  updateHeaderImage () {
    if (this.props.user.id === this.props.currentUser.id) {
      return (<label className="update-header-image-button">
        <i
          className="fa fa-camera"
          id="camera"
          aria-hidden="true"
        />
        Upload header image
                    <input
          onChange={this.handleHeaderChange}
          type="file"
          className="hidden-profile"
          accept="image/*"
        />
      </label>);
    } else {
      return <div></div>;
    }
  }

  updateUserImage() {
    // debugger;
    if (this.props.user.id === this.props.currentUser.id) {
      return (<label className="update-profile-image-button">
        <i
          className="fa fa-camera"
          id="camera"
          aria-hidden="true"
        />
        Update image
                    <input
          onChange={this.handleProfileChange}
          type="file"
          className="hidden-profile"
          accept="image/*"
        />
      </label>);
    } else {
      return <div></div>;
    }
  }

  handleProfileChange(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({ profileUrl: reader.result, profileImgFile: file });
      this.setState({backgroundProfileImg: `url(${this.state.profileUrl})`});
      const profileImgFile = this.state.profileImgFile;
      const formData = new FormData();
      formData.append("user[id]", this.props.user.id);
      formData.append("user[profile_image]", profileImgFile);
      this.props.updateUser(this.props.user.id, formData);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ profileUrl: "", profileImgFile: null })
    }
 
  }

  handleHeaderChange(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({ headerUrl: reader.result, headerImgFile: file });
      this.setState({ backgroundHeaderImg: `url(${this.state.headerUrl})` });
      const headerImgFile = this.state.headerImgFile;
      const formData = new FormData();
      formData.append("user[id]", this.props.user.id);
      formData.append("user[header_image]", headerImgFile);
      this.props.updateUser(this.props.user.id, formData);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ headerUrl: "", headerImgFile: null })
    }
  }

  render () {
    if (!this.props.user) {
      return (<h1>Loading</h1>)
    }
    return (
      <div className="main">
        <div className="main-content-show">
          <div className="showBox">
            <div className="header-image" style={{backgroundImage: this.state.backgroundHeaderImg}}>
              <div className="user-show-info">
                <div className="image-upload-wrapper">
                  <div className="user-profile-pic" style={{backgroundImage: this.state.backgroundProfileImg}}>  
                    {this.updateUserImage()}
                  </div>
                </div>
                <div className="user-info">
                  <div className="title-username">
                    {this.props.user.username}
                    <div className="black-star-img"></div>
                  </div>
                </div>
              </div>
              {this.updateHeaderImage()}
            </div>
          </div>
          <div className="display-flex">
            <UserIndexContainer />
            <SidebarContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default UserShow;