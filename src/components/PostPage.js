import React, { PropTypes } from 'react';

import { Item } from 'semantic-ui-react';

import BlogItem from 'components/widgets/blog/Item';

import { items } from 'constants/static/items';

const PostPage = ({params}) => (
  <Item.Group>
    <BlogItem item={items[params.id - 1]} />
  </Item.Group>
);

PostPage.propTypes = {
  params: PropTypes.object
};

export default PostPage;
