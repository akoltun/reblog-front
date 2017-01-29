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
    this.fetchPost(this.props.params.id - 1);
  }

  fetchPosts(callback) {
    request.get(
      'http://localhost:3002/',
      {},
      (err, res) => callback(err, res)
    );
  }

  fetchPost(id) {
    this.fetchPosts(
      (err, res) => this.setState({ item: res.body[id] })
    );
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
