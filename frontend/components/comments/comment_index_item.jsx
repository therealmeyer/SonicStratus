import React from 'react';
import { Link } from 'react-router-dom';
const CommentIndexItem = (props) => {
  // debugger;
  let profileImg = props.comment.user_img === "/profile_images/original/missing.png" ?
    'linear-gradient(135deg, #846170, #70929c)' : `url(${props.comment.user_img})`;
  return (
    <div className="comment-container">
      <div className="comment-user-image" style={{backgroundImage: profileImg}} />
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