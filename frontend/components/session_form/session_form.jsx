import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
    
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => {
      if (this.props.formType === "SignUp")
        this.props.closeSignUpModal();
      else {
        this.props.closeLoginModal();
      }
    });
    
  }

  renderErrors() {
    return (
      <ul className="session-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleDemoUser (e) {
    let process = this.props.processForm.bind(this);
    e.preventDefault();
    this.setState({ username: '', password: '' });
    let username = Array.from('user');
    let password = Array.from('password');
    this.clearInterval = setInterval(() => {
      if (username.length) {
        this.setState({ username: (this.state.username + username.shift()) });
      } else if (password.length) {
        this.setState({ password: (this.state.password + password.shift()) });
      } else {
        clearTimeout(this.clearInterval);
        process({ username: 'user', password: 'password'});
      }
    }, 150);
  }

  render() {
    return (
          <form onSubmit={this.handleSubmit} className="session-form">
            <div className="soundcloud-logo" />

            <h2 className="form-header">{this.props.formType}</h2>
            {this.renderErrors()}
            <div className="login-form">
              <div className="input-session">
                <label>
                  Username
                  <input type="text" value={this.state.username} 
                  onChange={this.update("username")} className="input-field" 
                  placeholder="Username"
                  />
                </label>
              </div>
              <div className="input-session">
                <label>
                  Password
                  <input type="password" value={this.state.password} 
                  onChange={this.update("password")} className="input-field" 
                  placeholder="Password"
                  />
                </label>
              </div>
              <input className="session-submit" type="submit" value={this.props.formType} />
              <button onClick={this.handleDemoUser} className="session-submit">
                Demo Login
              </button>
            </div>
          </form>
    );
  }
}

export default withRouter(SessionForm);