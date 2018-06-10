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