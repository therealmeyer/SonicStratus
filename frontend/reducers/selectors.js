export const selectBottomTracks = (state, tracks) => {
  let reversed = tracks.reverse();
  let resultTracks = [];
  reversed.forEach((track) => {
    if (track.user_id !== state.session.currentUser.id && resultTracks.length < 4) {
      resultTracks.push(track);
    }
  });
  return resultTracks;
};

export const firstTwelveTracks = (tracks) => {
  return tracks.slice(0,12);
};

export const myTrack = (track, currentUser) => {
  // debugger;
  if (!track) {
    return false;
  }
  return track.user_id === currentUser.id ? true : false;
};