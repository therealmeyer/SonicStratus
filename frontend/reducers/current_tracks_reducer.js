import { 
  RECEIVE_CURRENT_TRACK, 
  PAUSE_PLAY_TRACK,
  SET_TIME
} from '../actions/current_track_actions';
import merge from 'lodash/merge';

let default_state = {
  playing: false,
  current_time: 0.00,
  length: 0,
  track: {
    track_id: -1,
    image_url: null,
    audio_url: null
  }
}

const currentTrackReducer = (state = default_state, action) => {
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
      newState = merge(newState, {length: action.time})
      return newState;
    default: 
      return state;
  }

};

export default currentTrackReducer;