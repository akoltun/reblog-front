import React, { PropTypes } from 'react';

import TextBox from './elements/TextBox';
import Image from './elements/Image';
import Meta from './elements/Meta';
import { Item } from 'semantic-ui-react';

class BlogItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike() {
    this.props.likeCallback(this.props.item.id);
  }

  render() {
    return (
      <Item>
        <Image {...Object.assign(imageDefaultStyle, this.props.item.image)} />

        <Item.Content>
          <Item.Header as='h2'>
              {this.props.item.title}
          </Item.Header>

          <Item.Description>
            <TextBox>{this.props.item.text}</TextBox>
          </Item.Description>

          <Item.Meta>
            <Meta {...this.props.item.meta} likeCallback={this.handleLike} />
          </Item.Meta>
        </Item.Content>
      </Item>
    );
  }
}

const imageDefaultStyle = {
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
    meta: PropTypes.object
  }),
  likeCallback: PropTypes.func
};

export default BlogItem;
