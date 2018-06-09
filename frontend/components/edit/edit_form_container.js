import { connect } from 'react-redux';
import UploadForm from './upload_form';
import { updateTrack
} from '../../actions/track_actions';
import {
  withRouter
} from 'react-router';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  track: state.entities.tracks[ownProps.match.params.trackId],
  formType: "Edit"
});

const mapDispatchToProps = dispatch => ({
  processForm: track => dispatch(updateTrack(track))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UploadForm)
);
