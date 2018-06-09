export const createTrack = (formData) => (
  $.ajax({
    url: '/api/tracks',
    method: 'POST',
    processData: false,
    contentType: false, 
    dataType: 'json',
    data: formData
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


