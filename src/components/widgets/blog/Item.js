import React, { PropTypes } from 'react';

import TextBox from './elements/TextBox';
import Image from './elements/Image';
import Meta from './elements/Meta';
import {Divider, Segment} from 'semantic-ui-react';

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
      <Segment>
        <Image {...Object.assign(imageDefaultStyle, this.props.item.image)} />
        <TextBox>{this.props.item.text}</TextBox>
        <Divider clearing />
        <Meta {...this.props.item.meta} likeCallback={this.handleLike} />
      </Segment>
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
    text: PropTypes.string,
    meta: PropTypes.object
  }),
  likeCallback: PropTypes.func
};

export default BlogItem;
