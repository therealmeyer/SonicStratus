import React from 'react';
import { Link } from 'react-router-dom';
const CommentIndexItem = (props) => {
  // debugger;
  return (
    <div className="comment-container">
      <img className="comment-user-image" src={props.comment.user_img} />
      <div className="comment-info">
        <div className="comment-username">
          <Link to={`/users/${props.comment.user_id}`}>
            {props.comment.username}
          </Link>
        </div>
        <div className="comment-body">
          {props.comment.body}
        </div>
      </div>
      <div className="timestamp-wrapper">
        <div className="comment-time">
          {props.comment.timestamp}
        </div>
      </div>
    </div>
  );
}

export default CommentIndexItem;