import { get } from 'lodash/object';
import { find } from 'lodash/collection';

import BlogPageContainer from 'containers/BlogPageContainer';
import PostPageContainer from 'containers/PostPageContainer';

import AboutPage from 'components/pages/AboutPage';
import MainLayout from 'components/layouts/MainLayout';

import initialLoad from 'helpers/initialLoad';
import { postPath, aboutPath } from 'helpers/routes';

import { fetchPosts } from 'actions/Posts';
import { fetchPost, receivePost } from 'actions/Post';

const IndexRoute = {
  path: '/',
  component: BlogPageContainer,
  prepareData: (store) => {
    if (get(store.getState(), 'posts.items', []).length == 0) {
      if (initialLoad()) return;
      return store.dispatch(fetchPosts());
    }
  }
};

const PostRoute = {
  path: postPath(),
  component: PostPageContainer,
  prepareData: (store, query, params) => {
    const items = get(store.getState(), 'posts.items', false);
    const item = items && find(items, { id: +params.id });

    if (item) {
      return store.dispatch(receivePost(item));
    } else {
      return store.dispatch(fetchPost(params.id));
    }
  }
};

const AboutRoute = {
  path: aboutPath(),
  component: AboutPage
};

export default {
  component: MainLayout,
  childRoutes: [
    IndexRoute,
    PostRoute,
    AboutRoute
  ]
};
