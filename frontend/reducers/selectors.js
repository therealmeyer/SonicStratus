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

export const selectUserTracks = (tracks, userId) => {
  // debugger;
  let myTracks = [];
  tracks.forEach(track => {
    if (track.user_id === parseInt(userId)) {
      myTracks.push(track);
      // debugger;
    }
  });
  return myTracks;
};

export const selectTrackComments = (comments, trackId) => {
  let myComments = [];
  comments.forEach(comment => {
    if (comment.track_id === trackId) {
      myComments.push(comment);
    }
  });
  // debugger;
  return myComments.reverse();
};

