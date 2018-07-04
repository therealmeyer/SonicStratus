export const fetchSearch = query => (
  $.ajax({
    method: 'GET',
    url: 'api/searches',
    data: { query }
  })
);