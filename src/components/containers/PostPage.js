import React, { PropTypes } from 'react';

import { Item, Divider } from 'semantic-ui-react';

import BlogItem from 'components/widgets/blog/Item';

import request from 'superagent';
// import { items } from 'constants/static/items';

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: {} };
  }

  componentDidMount() {
    this
      .fetchPosts
      .then(
        posts => this.setState({ item: posts[this.props.params.id - 1] })
      );
  }

  fetchPosts() {
    return new Promise(function(resolve, reject) {
      request.get(
        'http://localhost:3002/',
        {},
        (err, res) => err ? reject(err) : resolve(res.body)
      );
    });
  }

  render() {
    const {item} = this.state;
    return (
      <Item.Group>
        <BlogItem item={item} />
        <Divider />
      </Item.Group>
    );
  }
}

PostPage.propTypes = {
  params: PropTypes.object
};

export default PostPage;
