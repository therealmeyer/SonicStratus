export const createTrack = (track) => (
  $.ajax({
    url: '/api/tracks',
    method: 'POST',
    data: { track }
  })
);

export const fetchTrack = trackId => (
  $.ajax({
    url: `/api/tracks/${trackId}`,
    method: 'GET'
  })
);

export const fetchAllTracks = () => (
  $.ajax({
    url: `/api/tracks`,
    method: 'GET'
  })
);


export const updateTrack = track => (
  $.ajax({
    url: `/api/tracks/${track.id}`,
    method: 'PATCH',
    data: { track }
  })
);

export const deleteTrack = trackId => (
  $.ajax({
    url: `/api/tracks/${trackId}`,
    method: 'DELETE'
  })
);


