export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';
export const PAUSE_PLAY_TRACK = 'PAUSE_PLAY_TRACK';
export const SET_TIME = 'SET_TIME';
export const SET_PLAYER_TO = 'SET_PLAYER_TO';

export const receiveCurrentTrack = track => ({
  type: RECEIVE_CURRENT_TRACK,
  track
}); 

export const pausePlayTrack = () => ({
  type: PAUSE_PLAY_TRACK
});

export const setPlayerTo = time => ({
  type: SET_PLAYER_TO
});


export const setTime = time => ({
  type: SET_TIME,
  time
});