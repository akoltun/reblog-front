import React, { PropTypes } from 'react';

import { Item, Divider } from 'semantic-ui-react';

import BlogItem from './BlogItem';

const BlogList = ({items, likes, likePost}) => (
  <Item.Group>
    {items.map((item, index) => (
      <div key={item.id}>
        {index > 0 && <Divider />}
        <BlogItem
          item={item}
          like={Object.assign({}, likes[item.id], {
            callback: () => likePost(item.id)
          })}
        />
      </div>
    ))}
  </Item.Group>
);

BlogList.propTypes = {
  items: PropTypes.array,
  likes: PropTypes.object,
  likePost: PropTypes.func
};

export default BlogList;
