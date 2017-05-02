import React, { PropTypes } from 'react';

import { Item } from 'semantic-ui-react';
import Helmet from 'react-helmet';

import BlogItem from 'components/widgets/BlogItem';
import Loader from 'components/widgets/Loader';
import { editPostPath } from 'helpers/routes';
import Link from 'components/elements/Link';

const PostPage = ({item, isRequesting}) => (
  <div>
    {item && <Helmet title={item.title} />}
    <Loader loading={isRequesting}>
      <Item.Group>
        <BlogItem item={item} />
        <Link to={editPostPath(item.id)}>Править</Link>
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
