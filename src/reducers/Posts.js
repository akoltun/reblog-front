import { assign } from 'lodash/object';

import * as types from 'constants/actionTypes/PostsActionTypes';
import * as likeTypes from 'constants/actionTypes/LikePostActionTypes';

const initialState = {
  isRequesting: false,
  error: false,
  items: [],
  likes: {}
};

const changeLikeItem = (state, index, value) => {
  const newLike = assign({}, state.likes);
  newLike[index] = value;
  return newLike;
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
          item => item.id == action.response.id ? action.response : item
        ),
        likes: changeLikeItem(state, action.response.id, {
          isRequesting: false,
          error: false
        })
      });

    default:
      return state;
  }
}
