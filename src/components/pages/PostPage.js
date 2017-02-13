import React, { PropTypes } from 'react';

import { Item } from 'semantic-ui-react';

import BlogItem from 'components/widgets/BlogItem';
import Loader from 'components/widgets/Loader';

const PostPage = ({item, isRequesting, like}) => (
  <Loader loading={isRequesting}>
    <Item.Group>
      <BlogItem item={item} like={like} />
    </Item.Group>
  </Loader>
);

PostPage.propTypes = {
  item: PropTypes.object,
  isRequesting: PropTypes.bool,
  error: PropTypes.bool,
  like: PropTypes.object
};

export default PostPage;
