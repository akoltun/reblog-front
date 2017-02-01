import React, { PropTypes } from 'react';

import BlogItem from './Item';

const BlogList = ({ items }) => (
  <div>
    {items.map((item) => (
      <BlogItem key={item.id} item={item} />
    ))}
  </div>
);

BlogList.propTypes = {
  items: PropTypes.array,
};

export default BlogList;
