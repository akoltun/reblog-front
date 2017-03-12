import request from 'superagent';

import { API_ROOT } from 'constants/API';
import * as types from 'constants/actionTypes/PostActionTypes';
import { postPath } from 'helpers/routes';
import { syncPostToPosts } from 'actions/Posts';

const requestPost = (id) => ({
  type: types.FETCH_POST_REQUEST,
  id
});

export const receivePost = (response) => ({
  type: types.FETCH_POST_SUCCESS,
  response
});

const errorPost = () => ({
  type: types.FETCH_POST_ERROR
});

export function fetchPost(id) {
  return (dispatch) => {
    dispatch(requestPost(id));

    return request
      .get(`${API_ROOT}${postPath(id)}`)
      .end((err, res) => {
        if (err) {
          dispatch(errorPost());
        } else {
          dispatch(receivePost(res.body));
          dispatch(syncPostToPosts(res.body));
        }
      });
  };
}
