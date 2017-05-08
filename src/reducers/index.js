import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import posts from './Posts';
import post from './Post';

export default combineReducers({
  posts,
  post,
  form
});
