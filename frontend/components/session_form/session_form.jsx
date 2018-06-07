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

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  highlighterrors() {
    if (this.props.errors.includes("Password is too short (minimum is 6 characters)")
      || this.props.errors.includes("Incorrect username/password combination")) {
        $("#password").css('border', '1px solid #f50');
    }
    if (this.props.errors.includes("Username can't be blank")
      || this.props.errors.includes("Incorrect username/password combination")
      || this.props.errors.includes("Username has already been taken")) {
        $("#username").css("border", "1px solid #f50");
    }
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
    // }
  }

  handleDemoUser (e) {
    $(".session-submit").attr("disabled", true);    
    let login = this.props.login.bind(this);
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
        login({ username: 'user', password: 'password'});
      }
    }, 150);
  }

  render() {
    this.highlighterrors();
    return (
          <form className="session-form">
            <div className="soundcloud-logo" />

            {/* <h2 className="form-header">{this.props.formType}</h2> */}
            {this.renderErrors()}
            <div className="login-form">
              <div className="input-session">
                <label className="session-label">
                  Username
                  <input id="username" type="text" value={this.state.username} 
                  onChange={this.update("username")} className="input-field" 
                  placeholder="Your Username"
                  />
                </label>
              </div>
              <div className="input-session">
                <label>
                  Password
                  <input id="password" type="password" value={this.state.password} 
                  onChange={this.update("password")} className="input-field" 
                  placeholder="Your Password"
                  />
                </label>
              </div>
              <button onClick={this.handleSubmit} className="session-submit">
                {this.props.formType}
              </button>
              <button onClick={this.handleDemoUser} className="session-submit">
                Demo Login
              </button>
            </div>
          </form>
    );
  }
}

export default withRouter(SessionForm);