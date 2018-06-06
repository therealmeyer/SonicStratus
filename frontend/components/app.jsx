import React from 'react';
import LandingPage from './landing_page/landing_page';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import Stream from './stream/stream';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Route exact path="/" component={LandingPage} />
    {/* <AuthRoute path="/login" component={LoginFormContainer} /> */}
    {/* <AuthRoute path="/signup" component={SignUpFormContainer} /> */}
    <Route path="/stream" component={Stream} />
  </div>
);

export default App;