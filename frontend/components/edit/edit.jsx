import React from 'react';
import NavContainer from '../nav/nav_container';
import EditFormContainer from './edit_form_container';

const Edit= (props) => {
  return <div>
    <NavContainer />
    <div className="main">
      <div className="main-content">
        <div className="header-box">
          <h1 className="upload-header">Edit</h1>
        </div>
        {/* <div className="main-content"> */}
        <EditFormContainer />
        {/* </div> */}
      </div>
    </div>
  </div>;
};

export default Edit;