import { connect } from 'react-redux';
// import { assign, mapValues } from 'lodash/object';

import BlogPage from 'components/pages/BlogPage';
import { likePost } from 'actions/Like';

const stateToProps = (state) => ({
  items: state.posts.items,
  likes: state.posts.likes,
  isRequesting: state.posts.isRequesting,
  error: state.posts.error,
});

const actionToProps = (dispatch) => ({
  likePost: (id) => dispatch(likePost(id))
});

export default connect(stateToProps, actionToProps)(BlogPage);
