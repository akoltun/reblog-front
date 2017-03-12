import { assign } from 'lodash/object';

import * as types from 'constants/actionTypes/PostActionTypes';
import * as likeTypes from 'constants/actionTypes/LikePostActionTypes';

const initialState = {
  isRequesting: false,
  error: false,
  item: {
    meta: {
      likes: {
        isRequesting: false,
        error: false,
      }
    }
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    // POST
    case types.FETCH_POST_REQUEST:
      return assign({}, initialState, { isRequesting: true });

    case types.FETCH_POST_ERROR:
      return assign({}, initialState, { error: true });

    case types.FETCH_POST_SUCCESS:
    case likeTypes.SEND_LIKE_SUCCESS:
      return assign({}, initialState, { item: action.response });

    // LIKE
    case likeTypes.SEND_LIKE_REQUEST:
      return assign({}, initialState, {
        item: assign({}, state.item, {
          meta: assign({}, state.item.meta, {
            likes: assign({}, state.item.meta.likes, {
              isRequesting: true,
              error: false
            })
          })
        })
      });

    case likeTypes.SEND_LIKE_ERROR:
      return assign({}, initialState, {
        item: assign({}, state.item, {
          meta: assign({}, state.item.meta, {
            likes: assign({}, state.item.meta.likes, {
              isRequesting: false,
              error: true
            })
          })
        })
      });

    default:
      return state;
  }
}
