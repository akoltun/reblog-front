import { assign } from 'lodash/object';
import { findIndex } from 'lodash/array';

import * as types from 'constants/actionTypes/PostsActionTypes';
import * as likeTypes from 'constants/actionTypes/LikePostActionTypes';

const initialState = {
  isRequesting: false,
  error: false,
  items: [],
  likes: []
};

const changeLikeItem = (state, index, value) => {
  const itemIndex = findIndex(state.items, { id: index });
  return state.likes.map((item, i) => i == itemIndex ? value : item);
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, state, {
        isRequesting: true,
        error: false
      });

    case types.FETCH_POSTS_ERROR:
      return assign({}, state, {
        isRequesting: false,
        error: true
      });

    case types.FETCH_POSTS_SUCCESS:
      return assign({}, state, {
        isRequesting: false,
        error: false,
        items: action.response,
        likes: action.response.map(() => ({
          isRequesting: false,
          error: false
        }))
      });

    case likeTypes.SEND_LIKE_REQUEST:
      return assign({}, state, {
        likes: changeLikeItem(state, action.id, {
          isRequesting: true,
          error: false
        })
      });

    case likeTypes.SEND_LIKE_ERROR:
      return assign({}, state, {
        likes: changeLikeItem(state, action.id, {
          isRequesting: false,
          error: true
        })
      });

    case likeTypes.SEND_LIKE_SUCCESS:
      return assign({}, state, {
        items: state.items.map(
          item => item.id == action.id ? action.response : item
        ),
        likes: changeLikeItem(state, action.id, {
          isRequesting: false,
          error: true
        })
      });

    default:
      return state;
  }
}
