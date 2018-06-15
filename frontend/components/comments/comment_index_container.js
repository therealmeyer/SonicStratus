import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { withRouter } from 'react-router';
import { selectTrackComments } from '../../reducers/selectors';
import { deleteComment } from '../../actions/comment_actions';


const mapStateToProps = (state, ownProps) => {
  let trackComments = Object.keys(state.entities.comments).map(id => state.entities.comments[id])
  let trackId = parseInt(ownProps.match.params.trackId);
  return {
    comments: selectTrackComments(trackComments, trackId),
    count: state.entities.tracks[trackId].comment_count,
    track: state.entities.tracks[trackId],
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  // createComment: comment => dispatch(createComment(comment)),
  deleteComment: commentId => dispatch(deleteComment(commentId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentIndex));


