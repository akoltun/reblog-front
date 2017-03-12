import * as types from 'constants/actionTypes/LikePostActionTypes';
import { API_CALL } from 'middleware/API';
import { likePostPath } from 'helpers/routes';

export function likePost(id) {
  return {
    [API_CALL]: {
      endpoint: likePostPath(id),
      method: 'POST',
      query: {},
      types: {
        request: types.SEND_LIKE_REQUEST,
        success: types.SEND_LIKE_SUCCESS,
        errors: types.SEND_LIKE_ERROR
      }
    },
    id
  };
}
