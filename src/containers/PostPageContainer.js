import { connect } from 'react-redux';
import { assign } from 'lodash/object';

import PostPage from 'components/pages/PostPage';
import { likePost } from 'actions/Like';

const stateToProps = (state) => ({
  item: state.post.item,
  isRequesting: state.post.isRequesting,
  error: state.post.error,
  like: {
    isRequesting: state.post.like.isRequesting,
    error: state.post.like.error
  }
});

const actionToProps = (dispatch) => ({
  likePost: (id) => dispatch(likePost(id))
});

const mergeProps = (stateProps, actionProps, ownProps) =>
  assign({}, stateProps, {
    like: assign({}, stateProps.like, stateProps.item && {
      callback: () => actionProps.likePost(stateProps.item.id)
    })
  }, ownProps);

export default connect(stateToProps, actionToProps, mergeProps)(PostPage);
