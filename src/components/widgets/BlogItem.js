import React, { PropTypes } from 'react';

import { Item } from 'semantic-ui-react';

import Link from 'components/elements/Link';
import TextBox from 'components/elements/TextBox';
import Image from 'components/elements/Image';
import Meta from './Meta';

const BlogItem = ({item}) => (
  <Item>
    <Image {...Object.assign(imageDefaultStyle, item.image)} />

    <Item.Content>
      <Item.Header as='h2'>
        <Link to={item.link}>
          {item.title}
        </Link>
      </Item.Header>

      <Item.Description>
        <TextBox>{item.text}</TextBox>
      </Item.Description>

      <Item.Meta>
        <Meta {...item.meta} />
      </Item.Meta>
    </Item.Content>
  </Item>
);

const imageDefaultStyle = {
  item: {},
  height: 64,
  style: {
    marginRight: 10,
    float: 'left'
  }
};

BlogItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.object,
    title: PropTypes.string,
    text: PropTypes.string,
    meta: PropTypes.object,
  })
};

export default BlogItem;
