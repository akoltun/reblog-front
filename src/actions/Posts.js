import request from 'superagent';

import { API_ROOT } from 'constants/API';
import * as types from 'constants/actionTypes/PostsActionTypes';
import { queryString, postsPath } from 'helpers/routes';

const requestPosts = () => ({
  type: types.FETCH_POSTS_REQUEST
});

const receivePosts = (response) => ({
  type: types.FETCH_POSTS_SUCCESS,
  response
});

const errorPosts = () => ({
  type: types.FETCH_POSTS_ERROR
});

export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts());

    return request
      .get(`${API_ROOT}${postsPath()}`)
      .end((err, res) => {
        err ? dispatch(errorPosts()) : dispatch(receivePosts(res.body));
      });
  };
}

export const createLink = (linkParams) => (params) => (
  postsPath() + queryString(Object.assign({}, linkParams, params))
);
