import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = id => dispatch => (
  UserApiUtil.fetchUser(id)
    .then(resUser => dispatch(receiveUser(resUser)))
);

export const updateUser = (id, data) => dispatch => (
  UserApiUtil.updateUser(id, data)
    .then(resUser => dispatch(receiveUser(resUser)))
);