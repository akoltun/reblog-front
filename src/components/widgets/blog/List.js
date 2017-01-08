import React from 'react';

import BlogItem from './Item';

const BlogList = ({ items }) => (
  <div>
    {items.map((item, index) => (
      <BlogItem key={index} item={item} />
    ))}
  </div>
);

export default BlogList;
