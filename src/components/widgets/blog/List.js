import React from 'react';

import BlogItem from './Item';

const BlogList = ({ list }) => (
  <div>
    {list.map(({text, ...others}, index) => (
      <BlogItem key={index} {...others}>{text}</BlogItem>
    ))}
  </div>
);

export default BlogList;
