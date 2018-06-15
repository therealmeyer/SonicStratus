import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";


export const receiveComment = ({track, comments}) => ({
  type: RECEIVE_COMMENT,
  track,
  comments
});

export const removeComment = ({track, comments}) => ({
  type: DELETE_COMMENT,
  track, 
  comments
});

export const createComment = comment => dispatch => (
  CommentAPIUtil.createComment(comment)
    .then(payload => dispatch(receiveComment(payload)))
);

export const deleteComment = commentId => dispatch => (
  CommentAPIUtil.deleteComment(commentId)
    .then(payload => dispatch(removeComment(payload)))
);