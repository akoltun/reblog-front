import React, { PropTypes } from 'react';

import { Item } from 'semantic-ui-react';
import Helmet from 'react-helmet';

import BlogItem from 'components/widgets/BlogItem';
import Loader from 'components/widgets/Loader';

const PostPage = ({item, isRequesting}) => (
  <div>
    {item && <Helmet title={item.title} />}
    <Loader loading={isRequesting}>
      <Item.Group>
        <BlogItem item={item} />
      </Item.Group>
    </Loader>
  </div>
);

PostPage.propTypes = {
  item: PropTypes.object,
  isRequesting: PropTypes.bool,
  error: PropTypes.bool,
};

export default PostPage;
