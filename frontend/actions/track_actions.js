import * as TrackAPIUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const DELETE_TRACK = "DELETE_TRACK";
export const RECEIVE_UPLOAD_ERRORS = "RECEIVE_UPLOAD_ERRORS";
export const START_LOADING = "START_LOADING";


export const startLoading = () => ({
  type: START_LOADING
});

export const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});

export const receiveTrack = ({track, comments}) => ({
  type: RECEIVE_TRACK,
  track, 
  comments
});

export const receiveUploadErrors = errors => ({
  type: RECEIVE_UPLOAD_ERRORS,
  errors
});

export const removeTrack = (id) => ({
  type: DELETE_TRACK,
  trackId: id
});

export const createTrack = formData => dispatch => {
  // console.log(formData);
  return (
    TrackAPIUtil.createTrack(formData)
      .then(resTrack => (dispatch(receiveTrack(resTrack))
    ), err => (
        dispatch(receiveUploadErrors(err.responseJSON))
      ))
  );
};
  

export const fetchTrack = trackId => dispatch => (
  TrackAPIUtil.fetchTrack(trackId)
    .then(payload => dispatch(receiveTrack(payload)))
);

export const fetchAllTracks = tracks => dispatch => (
  TrackAPIUtil.fetchAllTracks()
    .then(resTracks => dispatch(receiveTracks(resTracks)))
);

export const fetchUserTracks = userId => dispatch => (
  TrackAPIUtil.fetchUserTracks(userId)
  .then(resTracks => dispatch(receiveTracks(resTracks)))
);

export const updateTrack = formData => dispatch => (
  TrackAPIUtil.updateTrack(formData)
    .then(payload => (dispatch(receiveTrack(payload))
  ), err => (
    dispatch(receiveUploadErrors(err.responseJSON))
    ))
);


export const deleteTrack = trackId => dispatch => (
  TrackAPIUtil.deleteTrack(trackId).then(payload => dispatch(removeTrack(payload.track.id)))
);