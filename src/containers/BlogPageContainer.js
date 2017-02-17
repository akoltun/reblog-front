import { connect } from 'react-redux';
import { assign } from 'lodash/object';
import { filter } from 'lodash/collection';
import { method } from 'lodash/util';
import { parse } from 'qs';
import { browserHistory as history } from 'react-router';

import BlogPage from 'components/pages/BlogPage';
import { likePost } from 'actions/Like';
import { PAGE_SIZE } from 'constants/Pagination';
import { extractParams, postsPath, postPath } from 'helpers/routes';

const createPostsPath = (pathParams) => (params) => (
  postsPath(assign({}, pathParams, params))
);

const doSearch = (createSearchPath, searchStr) => {
  const path = createSearchPath({search: searchStr || undefined});

  if ('search' in parse(history.getCurrentLocation().search.slice(1))) {
    history.replace(path);
  } else {
    history.push(path);
  }
};

const stateToProps = (state) => ({
  items: state.posts.items.map(item =>
    assign({}, item, {link: postPath(item.id)})
  ),
  likes: state.posts.likes,
  isRequesting: state.posts.isRequesting,
  error: state.posts.error,
});

const actionToProps = (dispatch) => ({
  likePost: (id) => dispatch(likePost(id)),
});

const mergeProps = (stateProps, actionProps, ownProps) => {
  const params = extractParams(ownProps.location);
  const page = +(params.page || 1);

  const filteredItems = params.search ? filter(
    stateProps.items,
    method('title.match', new RegExp(params.search, 'i'))
  ) : stateProps.items;

  return assign({}, stateProps, actionProps, ownProps, {
    items: filteredItems,
    page,
    pageCount: Math.ceil(filteredItems.length / PAGE_SIZE),
    gotoPage: createPostsPath({search: params.search}),
    search: params.search,
    searchStrChanged: (event) =>
      doSearch(createPostsPath({page}), event.currentTarget.value)
  });
};

export default connect(stateToProps, actionToProps, mergeProps)(BlogPage);
