import { connect } from 'react-redux';
import UploadForm from './upload_form';
import { createTrack } from '../../actions/track_actions';
import { withRouter } from 'react-router';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  track: { title: '', description: '', genre: ''},
  formType: "Upload"
});

const mapDispatchToProps = dispatch => ({
  processForm: track => dispatch(createTrack(track))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UploadForm)
);




