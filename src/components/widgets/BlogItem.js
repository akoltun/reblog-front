import React, { PropTypes } from 'react';
import { assign } from 'lodash/object';

import { Item } from 'semantic-ui-react';

import Link from 'components/elements/Link';
import TextBox from 'components/elements/TextBox';
import Image from 'components/elements/Image';
import Meta from './Meta';

const BlogItem = ({item, link, like}) => {
  const meta = assign({}, item.meta, like);
  meta.likes = assign({}, meta.likes, like);

  return (
    <Item>
      <Image {...Object.assign(imageDefaultStyle, item.image)} />

      <Item.Content>
        <Item.Header as='h2'>
          <Link to={link}>
            {item.title}
          </Link>
        </Item.Header>

        <Item.Description>
          <TextBox>{item.text}</TextBox>
        </Item.Description>

        <Item.Meta>
          <Meta {...meta} />
        </Item.Meta>
      </Item.Content>
    </Item>
  );
};

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
  }),
  link: PropTypes.string,
  like: PropTypes.object,
};

export default BlogItem;