export const createTrack = (formData) => {
  return ($.ajax({
    url: '/api/tracks',
    method: 'POST',
    processData: false,
    contentType: false, 
    dataType: 'json',
    data: formData
  }))
};

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


export const updateTrack = formData => {
  // debugger;
  return (
  $.ajax({
    url: `/api/tracks/${formData.values().next().value}`,
    method: 'PATCH', 
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  })
);
};

export const deleteTrack = trackId => (
  $.ajax({
    url: `/api/tracks/${trackId}`,
    method: 'DELETE'
  })
);


