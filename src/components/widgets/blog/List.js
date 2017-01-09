import React, { PropTypes } from 'react';

import BlogItem from './Item';

const BlogList = ({ items, ...others }) => (
  <div>
    {items.map((item) => (
      <BlogItem key={item.id} item={item} {...others} />
    ))}
  </div>
);

BlogList.propTypes = {
  items: PropTypes.array,
};

export default BlogList;
