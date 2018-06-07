import * as TrackAPIUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const DELETE_TRACK = "DELETE_TRACK";

export const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});

export const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

export const removeTrack = () => ({
  type: DELETE_TRACK
});

export const createTrack = track => dispatch => (
  TrackAPIUtil.createTrack(track)
    .then(resTrack => dispatch(receiveTrack(resTrack)))
);

export const fetchTrack = track => dispatch => (
  TrackAPIUtil.fetchTrack(track)
    .then(resTrack => dispatch(receiveTrack(resTrack)))
);

export const fetchAllTracks = tracks => dispatch => (
  TrackAPIUtil.fetchAllTracks()
    .then(resTracks => dispatch(receiveTracks(resTracks)))
);

export const updateTrack = track => dispatch => (
  TrackAPIUtil.updateTrack(track)
    .then(resTrack => dispatch(receiveTrack(resTrack)))
);

export const deleteTrack = trackId => dispatch => (
  TrackAPIUtil.deleteTrack(trackId).then(resTrack => dispatch(removeTrack(resTrack.id)))
);