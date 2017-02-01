import React, { PropTypes } from 'react';

import { Item, Divider } from 'semantic-ui-react';
import BlogItem from './Item';

const BlogList = ({items, ...others}) => (
  <Item.Group>
    {items.map((item) => (
      <div key={item.id}>
        <BlogItem item={item} {...others} />
        <Divider />
      </div>
    ))}
  </Item.Group>
);

BlogList.propTypes = {
  items: PropTypes.array
};

export default BlogList;
