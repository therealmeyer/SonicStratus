import React from 'react';
import SignUpFormContainer from '../session_form/signup_form_container';
import LoginFormContainer from '../session_form/login_form_container';
import { Link } from 'react-router-dom';

class SessionModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loginOpen: false,
      signupOpen: false
    };
    this.renderLoginModal = this.renderLoginModal.bind(this);
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);

  }

  renderLoginModal() {
    if (this.state.loginOpen) {
      return (
        <LoginFormContainer closeModal={this.closeLoginModal}/>
      )
    } else {
      return (<div></div>);
    }
  }

  toggleLoginModal() {
    this.setState({loginOpen: !this.state.loginOpen});
  }

  closeLoginModal(e) {
    if (e.target === e.currentTarget) {
      this.setState({loginOpen: false});
    }
  }

  render () {
    return (
      <ul className="landing-list">
        <li>
        <Link to="#" className="sign-in" onClick={this.toggleLoginModal}>
          Sign in
        </Link>
        </li>
        <li>
        <Link to="#" className="create-account" onClick={this.toggleSignUpModal}>
          Create account
        </Link>
        </li>
        {this.renderLoginModal()}
        {/* {this.renderSignUpModal()} */}
      </ul>
    );
  }

}

export default SessionModal;