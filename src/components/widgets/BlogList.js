import React, { PropTypes } from 'react';

import { Item, Divider } from 'semantic-ui-react';

import BlogItem from './BlogItem';

const BlogList = ({items}) => (
  <Item.Group>
    {items.map((item, index) => (
      <div key={item.id}>
        {index > 0 && <Divider />}
        <BlogItem item={item} />
      </div>
    ))}
  </Item.Group>
);

BlogList.propTypes = {
  items: PropTypes.array,
};

export default BlogList;
