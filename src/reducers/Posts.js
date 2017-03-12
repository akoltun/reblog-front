import { assign } from 'lodash/object';
import { map, find } from 'lodash/collection';

import * as types from 'constants/actionTypes/PostsActionTypes';
import * as likeTypes from 'constants/actionTypes/LikePostActionTypes';

const initialState = {
  isRequesting: false,
  error: false,
  items: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, initialState, { isRequesting: true });

    case types.FETCH_POSTS_ERROR:
      return assign({}, initialState, { error: true });

    case types.FETCH_POSTS_SUCCESS:
      return assign({}, initialState, { items: action.response });

    case types.SYNC_POST_TO_POSTS: {
      const oldItem = find(state.items, { id: action.post.id });
      // If oldItem is not found it means that the list of posts is outdated
      // and has to be refreshed
      return oldItem ? assign({}, state, {
        items: map(state.items, item => item == oldItem ? action.post : item)
      }) : initialState;
    }

    case likeTypes.SEND_LIKE_REQUEST:
      return assign({}, state, {
        items: map(state.items, item => item.id == action.id ?
          assign({}, item, {
            meta: assign({}, item.meta, {
              likes: assign({}, item.meta.likes, {
                isRequesting: true,
                error: false
              })
            })
          }) : item)
      });

    case likeTypes.SEND_LIKE_ERROR:
      return assign({}, state, {
        items: map(state.items, item => item.id == action.id ?
          assign({}, item, {
            meta: assign({}, item.meta, {
              likes: assign({}, item.meta.likes, {
                isRequesting: false,
                error: true
              })
            })
          }) : item)
      });

    case likeTypes.SEND_LIKE_SUCCESS:
      return assign({}, state, {items: map(state.items, item =>
        item.id == action.response.id ? action.response : item)});

    default:
      return state;
  }
}
