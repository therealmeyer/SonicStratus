import { 
  RECEIVE_CURRENT_TRACK, 
  PAUSE_PLAY_TRACK,
  SET_TIME,
  SET_PLAYER_TO,
  SET_WAVEFORM_TO
} from '../actions/current_track_actions';
import merge from 'lodash/merge';

let defaultState = {
  playing: false,
  currentTime: 0.00,
  length: 0,
  track: {
    id: -1,
    album_url: null,
    audio_url: null
  },
  setPlayerTo: 0,
  setWaveformTo: 0
};

const currentTrackReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_TRACK: 
      newState = merge(newState, {track: action.track});
      return newState;
    case PAUSE_PLAY_TRACK:
      newState = merge(newState, {playing: !state.playing})
      return newState;
    case SET_TIME:
      newState = merge(newState, {currentTime: action.time})
      return newState;
    case SET_PLAYER_TO:
      newState = merge(newState, {setPlayerTo: action.time});
      return newState;
    case SET_WAVEFORM_TO:
      newState = merge(newState, {setWaveformTo: action.time})
    default: 
      return state;
  }

};

export default currentTrackReducer;