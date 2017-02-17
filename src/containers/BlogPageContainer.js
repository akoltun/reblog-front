import { connect } from 'react-redux';
import { assign } from 'lodash/object';
import { parse } from 'qs';
import { browserHistory as history } from 'react-router';

import BlogPage from 'components/pages/BlogPage';
import { likePost } from 'actions/Like';
import { createLink } from 'actions/Posts';
import { PAGE_SIZE } from 'constants/Pagination';
import { extractParams } from 'helpers/routes';

const doSearch = (createSearchPath, searchStr) => {
  const path = createSearchPath({search: searchStr || undefined});

  if ('search' in parse(history.getCurrentLocation().search.slice(1))) {
    history.replace(path);
  } else {
    history.push(path);
  }
};

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
  const params = extractParams(ownProps.location);
  const page = +(params.page || 1);

  const searchStr = (params.search || '').toUpperCase();
  const filteredItems = searchStr ? stateProps.items.filter(
    item => ~item.title.toUpperCase().indexOf(searchStr)
  ) : stateProps.items;

  return assign({}, stateProps, actionProps, ownProps, {
    items: filteredItems,
    page,
    pageCount: Math.ceil(filteredItems.length / PAGE_SIZE),
    gotoPage: createLink({search: params.search}),
    search: params.search,
    searchStrChanged: (event) =>
      doSearch(createLink({page}), event.currentTarget.value)
  });
};

export default connect(stateToProps, actionToProps, mergeProps)(BlogPage);
