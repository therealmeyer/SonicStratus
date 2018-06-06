import React from 'react';
import { Link } from 'react-router-dom';

const SessionButtons = ({ openSignUpModal, openLoginModal }) => (
  <ul className="landing-list">
    <li>
      <button className="sign-in" onClick={() => openLoginModal()}>
        Sign in
      </button>
    </li>
    <li>
      <button onClick={() => openSignUpModal()} className="create-account">
        Create account
      </button>
    </li>
  </ul>
);

export default SessionButtons;