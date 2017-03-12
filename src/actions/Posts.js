import * as types from 'constants/actionTypes/PostsActionTypes';
import { API_CALL } from 'middleware/API';

export function fetchPosts() {
  return {
    [API_CALL]: {
      endpoint: '/',
      method: 'GET',
      query: {},
      types: {
        request: types.FETCH_POSTS_REQUEST,
        success: types.FETCH_POSTS_SUCCESS,
        error: types.FETCH_POSTS_ERROR
      }
    }
  };
}
