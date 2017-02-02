import React, { PropTypes } from 'react';
import request from 'superagent';
import qs from 'qs';

import { cloneDeep } from 'lodash';
import { browserHistory as history } from 'react-router';

import BlogPageView from 'components/widgets/blog/PageView';
import { postsPath, postPath } from 'helpers/routes';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.likePost = this.likePost.bind(this);
    this.doSearch = this.doSearch.bind(this);
  }

  componentDidMount() {
    this
      .fetchPosts()
      .then(posts => {
        posts.forEach(post => post.link = postPath(post.id));
        this.setState({ items: posts });
      });
  }

  queryParams() {
    return qs.parse(this.props.location.search.slice(1));
  }

  searchString(props) {
    return qs.parse(props.location.search.slice(1)).search || '';
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

  likePost(id) {
    const { items } = this.state;
    const newItems = items.map((item) => {
      if (item.id == id) {
        const newItem = cloneDeep(item);
        newItem.meta.like = (newItem.meta.like || 0) + 1;
        return newItem;
      } else {
        return item;
      }
    });
    this.setState({ items: newItems });
  }

  doSearch(event) {
    const path = postsPath(Object.assign(
      {},
      this.queryParams(),
      {search: event.currentTarget.value || undefined}
    ));

    if ('search' in qs.parse(history.getCurrentLocation().search.slice(1))) {
      history.replace(path);
    } else {
      history.push(path);
    }
  }

  render() {
    const params = this.queryParams();
    const page = params.page || 1;
    const searchStr = (params.search || '').toUpperCase();

    const { items } = this.state;

    const filteredItems = searchStr ? items.filter(
      item => ~item.title.toUpperCase().indexOf(searchStr)
    ) : items;

    return (
      <BlogPageView
        items={filteredItems}
        likeItem={this.likePost}
        page={+page}
        link={postsPath()}
        params={params}
        search={this.doSearch}
        />
    );
  }
}

BlogPage.propTypes = {
  location: PropTypes.object
};

export default BlogPage;
