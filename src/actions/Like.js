import request from 'superagent';

import { API_ROOT } from 'constants/API';
import * as types from 'constants/actionTypes/LikePostActionTypes';
import { likePostPath } from 'helpers/routes';

const sendLike = (id) => ({
  type: types.SEND_LIKE_REQUEST,
  id
});

const succeedLike = (response) => ({
  type: types.SEND_LIKE_SUCCESS,
  response
});

const errorLike = () => ({
  type: types.SEND_LIKE_ERROR
});

export function likePost(id) {
  return (dispatch) => {
    dispatch(sendLike(id));

    return request
      .post(`${API_ROOT}${likePostPath(id)}`)
      .end((err, res) => {
        err ? dispatch(errorLike()) : dispatch(succeedLike(res.body));
      });
  };
}
