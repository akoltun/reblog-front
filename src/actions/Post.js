import * as types from 'constants/actionTypes/PostActionTypes';
import { API_CALL } from 'middleware/API';

export const receivePost = (response) => ({
  type: types.FETCH_POST_SUCCESS,
  response
});

export function fetchPost(id) {
  return {
    [API_CALL]: {
      endpoint: `/posts/${id}`,
      method: 'GET',
      query: {},
      types: {
        request: types.FETCH_POST_REQUEST,
        success: types.FETCH_POST_SUCCESS,
        error: types.FETCH_POST_ERROR
      }
    }
  };
}
