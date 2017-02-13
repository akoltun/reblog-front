import BlogPageContainer from 'containers/BlogPageContainer';
import PostPageContainer from 'containers/PostPageContainer';

import AboutPage from 'components/pages/AboutPage';
import MainLayout from 'components/layouts/MainLayout';

import { postPath, aboutPath } from 'helpers/routes';

import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';

const IndexRoute = {
  path: '/',
  component: BlogPageContainer,
  prepareData: (store) => {
    store.dispatch(fetchPosts());
  }
};

const PostRoute = {
  path: postPath(),
  component: PostPageContainer,
  prepareData: (store, query, params) => {
    store.dispatch(fetchPost(params.id));
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
