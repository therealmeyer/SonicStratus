import React from 'react';
import { Link } from 'react-router-dom';

const SessionButtons = ({ openSignUpModal, openLoginModal }) => (
  <ul className="landing-list">
    <li>
      <Link to="#" className="sign-in" onClick={() => openLoginModal()}>
        Sign in
      </Link>
    </li>
    <li>
      <Link to="#" onClick={() => openSignUpModal()} className="create-account">
        Create account
      </Link>
    </li>
  </ul>
);

export default SessionButtons;