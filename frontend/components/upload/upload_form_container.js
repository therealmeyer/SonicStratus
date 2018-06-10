import { connect } from 'react-redux';
import UploadForm from './upload_form';
import { createTrack, startLoading } from '../../actions/track_actions';
import { withRouter } from 'react-router';
import { clearUploadErrors } from '../../actions/error_actions';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  track: { title: '', description: '', genre: ''},
  formType: "Upload",
  errors: state.errors.upload,
  loading: state.uiLoading
});

const mapDispatchToProps = dispatch => ({
  processForm: track => dispatch(createTrack(track)),
  clearErrors: () => dispatch(clearUploadErrors()),
  showLoading: () => dispatch(showLoading()),
  hideLoading: () => dispatch(hideLoading())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UploadForm)
);




