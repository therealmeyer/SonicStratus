import React from 'react';
import LandingPage from './landing_page/landing_page';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import Stream from './stream/stream';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, UserProtectedRoute } from '../util/route_util';
import Upload from './upload/upload';
import Edit from './edit/edit';
import MediaPlayerContainer from './media_player/media_player_container';
import TrackShowContainer from './track_show/track_show_container';
import NavContainer from './nav/nav_container';
import UserShowContainer from './user_show/user_show_container';
const App = () => (
  <div>
    {/* <Switch>
      <AuthRoute exact path="/" component={LandingPage} />
      <NavContainer />
    </Switch> */}
    <NavContainer />
    <Switch>
      <AuthRoute exact path="/" component={LandingPage} />
      {/* <AuthRoute path="/login" component={LoginFormContainer} /> */}
      {/* <AuthRoute path="/signup" component={SignUpFormContainer} /> */}
      <ProtectedRoute path="/stream" component={Stream} />
      <ProtectedRoute path="/upload" component={Upload} />
      <UserProtectedRoute path="/tracks/:trackId/edit" component={Edit} />
      <ProtectedRoute path="/tracks/:trackId" component={TrackShowContainer} />
      <ProtectedRoute path="/users/:userId" component={UserShowContainer} />
      <Redirect to="/" />
    </Switch>
    <footer>
      <MediaPlayerContainer />
    </footer>
  </div>
);

export default App;