import React from 'react';
import LandingPage from './landing_page/landing_page';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import Stream from './stream/stream';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Upload from './upload/upload';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={LandingPage} />
    {/* <AuthRoute path="/login" component={LoginFormContainer} /> */}
    {/* <AuthRoute path="/signup" component={SignUpFormContainer} /> */}
      <ProtectedRoute path="/stream" component={Stream} />
      <ProtectedRoute path="/upload" component={Upload} />
      <ProtectedRoute path="/tracks/:trackId/edit" component />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;