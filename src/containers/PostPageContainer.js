import { connect } from 'react-redux';

import PostPage from 'components/pages/PostPage';

const stateToProps = (state) => ({
  item: state.post.item,
  isRequesting: state.post.isRequesting,
  error: state.post.error
});

export default connect(stateToProps)(PostPage);
