import React from 'react';
import { Link } from 'react-router-dom';
import SessionModal from '../modals/session_modal';
import Modal from 'react-modal';
import SessionButtons from '../modals/session_modal_buttons';
import LoginFormContainer from '../session_form/login_form_container';
import SignUpFormContainer from '../session_form/signup_form_container';
import LandingPageContainer from './landing_page_container';
// https://github.com/reactjs/react-modal/tree/master/docs/styles
const modalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "static",
    top: '200px',
    left: '300px',
    right: "100px",
    bottom: "100px",
    border: "1px solid #ccc",
    background: "#fffff",
    overflow: "auto",
    borderRadius: "4px",
    WebkitOverflowScrolling: "touch",
    outline: "none",
    padding: "20px",
    width: "450px",
    margin: "0 auto"
  }
};



class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalLoginOpen: false, modalSignUpOpen: false };
    Modal.setAppElement("#root");
    this.openLoginModal = this.openLoginModal.bind(this);
    this.openSignUpModal = this.openSignUpModal.bind(this);
  }

  // https://github.com/reactjs/react-modal
  openLoginModal() {
    this.setState({ modalLoginOpen: true });
  }

  closeLoginModal() {
    this.setState({ modalLoginOpen: false });
  }

  openSignUpModal() {
    this.setState({ modalSignUpOpen: true });
  }

  closeSignUpModal() {
    this.setState({ modalSignUpOpen: false });
  }

  render() {
    return <div className="main-landing">
      <div className="main-content-landing">
        <div className="landing-image">
          <div className="landing-image-header">
            <h1 className="font-logo">SonicStratus</h1>
            <SessionButtons openSignUpModal={this.openSignUpModal} openLoginModal={this.openLoginModal} />

            <Modal isOpen={this.state.modalLoginOpen} 
              onRequestClose={this.closeLoginModal.bind(this)} 
              contentLabel="Modal" 
              style={modalStyle}>
              <LoginFormContainer closeLoginModal={this.closeLoginModal.bind(this)} />
            </Modal>

            <Modal isOpen={this.state.modalSignUpOpen} 
              onRequestClose={this.closeSignUpModal.bind(this)} 
              contentLabel="Modal" 
              style={modalStyle}>
              <SignUpFormContainer closeSignUpModal={this.closeSignUpModal.bind(this)} />
            </Modal>
          </div>
          <div className="landing-text">
            <h3 className="landing-title">
              Discover more with SonicStratus Go+
            </h3>
            <p className="landing-tagline">
              SonicStratus+ lets you listen offline, ad-free, with over 150
              million tracks - and growing.
            </p>
          </div>
        </div>
        <div className="search-box" onClick={this.openLoginModal}>
          <form className="search-box-form">
            <input type="text" placeholder="Search for artists, bands, tracks, podcasts"
            className="search-box-input"/>
            <button className="search-input-submit"></button>
          </form>
          <h2 className="or">or</h2>
          <button className="landing-upload-button">Upload your own</button>
        </div>
        <h1 className="trending-header">
          Hear what’s trending for free in the SonicStratus community
        </h1>
        <LandingPageContainer openModal={this.openLoginModal}/>
        
      </div>
      {/* <div className="front-mobile-teaser">
        <div className="mobile-teaser-box">
          <figure className="mobile-teaser"></figure>
        </div>
      </div> */}
    </div>;
  }
}

export default LandingPage;