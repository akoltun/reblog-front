import React, { PropTypes } from 'react';

import TextBox from './elements/TextBox';
import Image from './elements/Image';
import Meta from './elements/Meta';
import {Divider, Segment} from 'semantic-ui-react';

const BlogItem = ({item}) => (
  <Segment>
    <Image {...Object.assign(imageDefaultStyle, item.image)} />
    <TextBox>{item.text}</TextBox>
    <Divider clearing />
    <Meta {...item.meta} />
  </Segment>
);

const imageDefaultStyle = {
  height: 64,
  style: {
    marginRight: 10,
    float: 'left'
  }
};

BlogItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.object,
    text: PropTypes.string,
    meta: PropTypes.object
  })
};

export default BlogItem;
