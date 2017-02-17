import { connect } from 'react-redux';
import { assign } from 'lodash/object';

import PostPage from 'components/pages/PostPage';
import { likePost } from 'actions/Like';

const stateToProps = (state) => ({
  item: state.post.item,
  isRequesting: state.post.isRequesting,
  error: state.post.error
});

const actionToProps = (dispatch) => ({
  likePost: (id) => dispatch(likePost(id))
});

const mergeProps = (stateProps, actionProps, ownProps) =>
  assign({}, stateProps, {
    item: assign({}, stateProps.item, {
      meta: assign({}, stateProps.item.meta, {
        likes: assign({}, stateProps.item.meta.likes, {
          callback: () => actionProps.likePost(stateProps.item.id)
        })
      })
    })
  }, ownProps);

export default connect(stateToProps, actionToProps, mergeProps)(PostPage);
