import BlogPage from 'components/containers/BlogPage';
import PostPage from 'components/containers/PostPage';
import AboutPage from 'components/containers/AboutPage';
import MainLayout from 'components/layouts/MainLayout';

import { postPath, aboutPath } from 'helpers/routes';

const IndexRoute = {
  path: '/',
  component: BlogPage
};

const PostRoute = {
  path: postPath(),
  component: PostPage
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
