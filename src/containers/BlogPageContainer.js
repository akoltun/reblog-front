import { connect } from 'react-redux';
import { assign } from 'lodash/object';
import { parse } from 'qs';

import BlogPage from 'components/pages/BlogPage';
import { likePost } from 'actions/Like';
import { createLink } from 'actions/Posts';

const stateToProps = (state) => ({
  items: state.posts.items,
  likes: state.posts.likes,
  isRequesting: state.posts.isRequesting,
  error: state.posts.error,
});

const actionToProps = (dispatch) => ({
  likePost: (id) => dispatch(likePost(id)),
  createLink
});

const mergeProps = (stateProps, actionProps, ownProps) => {
  const params = parse(ownProps.location.search.substr(1));

  const searchStr = (params.search || '').toUpperCase();
  const filteredItems = searchStr ? stateProps.items.filter(
    item => ~item.title.toUpperCase().indexOf(searchStr)
  ) : stateProps.items;

  return assign({}, stateProps, actionProps, ownProps, {
    items: filteredItems,
    page: +(params.page || 1),
    search: params.search
  });
};

export default connect(stateToProps, actionToProps, mergeProps)(BlogPage);
