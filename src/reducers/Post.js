import { assign } from 'lodash/object';

import * as types from 'constants/actionTypes/PostActionTypes';
import * as likeTypes from 'constants/actionTypes/LikePostActionTypes';

const initialState = {
  isRequesting: false,
  error: false,
  like: {
    isRequesting: false,
    error: false,
  },
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    // POST
    case types.FETCH_POST_REQUEST:
      return assign({}, state, {
        isRequesting: true,
        error: false
      });

    case types.FETCH_POST_ERROR:
      return assign({}, state, {
        isRequesting: false,
        error: true
      });

    case types.FETCH_POST_SUCCESS:
      return assign({}, state, {
        isRequesting: false,
        error: false,
        item: action.response,
      });

    // LIKE
    case likeTypes.SEND_LIKE_REQUEST:
      return assign({}, state, {
        like: {
          isRequesting: true,
          error: false
        }
      });

    case likeTypes.SEND_LIKE_ERROR:
      return assign({}, state, {
        like: {
          isRequesting: false,
          error: true
        }
      });

    case likeTypes.SEND_LIKE_SUCCESS:
      return assign({}, state, {
        like: {
          isRequesting: false,
          error: false,
        },
        item: action.response
      });

    default:
      return state;
  }
}
