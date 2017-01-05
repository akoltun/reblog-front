import React from 'react';

import TextBox from './elements/TextBox';
import Image from './elements/Image';
import Author from './elements/Author';

const BlogItem = ({ children, image, info:{author} }) => (
  <div style={{clear: 'left', paddingTop: 10}}>
    <Image src={image} height="64" style={{marginRight:10, float: 'left'}}/>
    <TextBox>{children}</TextBox>
    <Author>{author}</Author>
  </div>
);

export default BlogItem;
