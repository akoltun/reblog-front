import BlogPage from 'components/BlogPage';
import PostPage from 'components/PostPage';
import MainLayout from 'components/layouts/MainLayout';

import { postPath } from 'helpers/routes';

const IndexRoute = {
  path: '/',
  component: BlogPage
};

const PostRoute = {
  path: postPath(),
  component: PostPage
};

export default {
  component: MainLayout,
  childRoutes: [
    IndexRoute,
    PostRoute
  ]
};
