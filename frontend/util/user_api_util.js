export const fetchUser = (userId) => (
  $.ajax({
    url: `api/users/${userId}`,
    method: "GET"
  })
);

export const updateUser = (userId, userData) => (
  $.ajax({
    url: `api/users/${userId}`,
    method: "PATCH",
    data: userData,
    contentType: false,
    processData: false
  })
);