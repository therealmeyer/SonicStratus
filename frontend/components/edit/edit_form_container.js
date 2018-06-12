import { connect } from 'react-redux';
import UploadForm from '../upload/upload_form';
import { updateTrack, fetchTrack
} from '../../actions/track_actions';
import {
  withRouter, Redirect
} from 'react-router';
import { clearUploadErrors } from '../../actions/error_actions';
import React from 'react';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { myTrack } from '../../reducers/selectors';


class EditTrackForm extends React.Component {

  componentDidMount() {
    // debugger;
    // this.props.fetchTrack(this.props.match.params.trackId);
  }
  componentWillMount() {
    this.props.fetchTrack(this.props.match.params.trackId);
    // debugger;
  }

  componentWillReceiveProps(nextProps) {
    // if (this.props.track.id != nextProps.match.params.trackId) {
    //   this.props.fetchTrack(nextProps.match.params.trackId);
    // }
  }

  render() {
    // console.log("render");
    const { currentUser, track, formType, errors, processForm, loading, history, clearErrors } = this.props;
    // debugger;
    if (!this.props.isMine) {
      // <Redirect to="/stream"/>
    }
    if (!this.props.track) return <h1>Loading</h1>
    return (
      !loading &&
      <UploadForm
        currentUser={currentUser}
        formType={formType}
        track={track} 
        errors={errors}
        processForm={processForm}
        loading={loading}
        showLoading={showLoading}
        hideLoading={hideLoading}
        history={history} 
        clearErrors={clearErrors}/>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  // debugger;
  return ({
  currentUser: state.session.currentUser,
  track: state.entities.tracks[ownProps.match.params.trackId],
  formType: "Edit",
  errors: state.errors.upload,
  loading: state.uiLoading,
  isMine: myTrack(state.entities.tracks[ownProps.match.params.trackId], state.session.currentUser)//create selector to check if this is my track || true
  });
};

const mapDispatchToProps = dispatch => ({
  processForm: track => dispatch(updateTrack(track)),
  fetchTrack: id => dispatch(fetchTrack(id)),
  clearErrors: () => dispatch(clearUploadErrors),
  showLoading: () => dispatch(showLoading()),
  hideLoading: () => dispatch(hideLoading())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditTrackForm)
);
