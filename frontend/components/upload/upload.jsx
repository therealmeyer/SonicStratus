import React from 'react';
import NavContainer from '../nav/nav_container';
import UploadFormContainer from './upload_form_container';

const Upload = (props) => {
  return <div>
      <NavContainer />
      <div className="main">
        <div className="main-content">
          <div className="header-box">
            <h1 className="upload-header">Upload</h1>
          </div>
        {/* <div className="main-content"> */}
        <UploadFormContainer />
        {/* </div> */}
        </div>
      </div>
    </div>;
};

export default Upload;