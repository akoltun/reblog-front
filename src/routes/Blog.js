import BlogPage from 'components/BlogPage';
import PostPage from 'components/PostPage';
import MainLayout from 'components/layouts/MainLayout';

const IndexRoute = {
  path: '/',
  component: BlogPage
};

const PostRoute = {
  path: '/posts/:id',
  component: PostPage
};

export default {
  component: MainLayout,
  childRoutes: [
    IndexRoute,
    PostRoute
  ]
};
