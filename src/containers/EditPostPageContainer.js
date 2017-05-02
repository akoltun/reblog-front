import { connect } from 'react-redux';
// import { assign } from 'lodash/object';

import EditPostPage from 'components/pages/EditPostPage';

const stateToProps = (state) => ({
  item: state.post.item,
  isRequesting: state.post.isRequesting,
  error: state.post.error
});

export default connect(stateToProps)(EditPostPage);
