import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
  
  render () {
    if (!this.props.comments) {
      return <div></div>
    }
    return (
    <div className="comment-index-wrapper">
      <div className="comment-header-wrapper">
        <h1 className="comment-index-header">
          <i className="fas fa-comment-alt comment-icon" />
            {this.props.count} comments
        </h1>
      </div>
      <ul className="comment-list">
        {this.props.comments.map(comment => (
          <CommentIndexItem key={comment.id} comment={comment}
            deleteComment={this.props.deleteComment}
          />
        ))}
      </ul>
    </div>
    );
  }

}

export default CommentIndex;