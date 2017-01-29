import BlogPage from '../components/BlogPage';
import MainLayout from '../components/layouts/MainLayout';

const IndexRoute = {
  path: '/',
  component: BlogPage
};

export default {
  component: MainLayout,
  childRoutes: [
    IndexRoute
  ]
};
