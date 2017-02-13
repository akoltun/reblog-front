import { connect } from 'react-redux';
import { assign } from 'lodash/object';
import { parse } from 'qs';

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

const mergeProps = (stateProps, actionProps, ownProps) =>
  assign({}, stateProps, actionProps, ownProps, {
    page: parse(ownProps.location.search.substr(1)).page || 1
  });


export default connect(stateToProps, actionToProps, mergeProps)(BlogPage);
