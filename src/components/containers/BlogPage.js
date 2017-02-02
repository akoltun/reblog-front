import React, { PropTypes } from 'react';
import request from 'superagent';
import qs from 'qs';

import { cloneDeep } from 'lodash';
import { browserHistory as history } from 'react-router';

import BlogPageView from 'components/widgets/blog/PageView';
import { postsPath, postPath } from 'helpers/routes';

import { PAGE_SIZE } from 'constants/Pagination';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.likePost = this.likePost.bind(this);
    this.doSearch = this.doSearch.bind(this);
    this.changePage = this.changePage.bind(this);
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

  changePage(page) {
    const path = postsPath(Object.assign(
      {},
      this.queryParams(),
      {page}
    ));

    history.push(path);
  }

  render() {
    const params = this.queryParams();
    const page = params.page || 1;
    const searchStr = (params.search || '').toUpperCase();

    const { items } = this.state;

    const filteredItems = searchStr ? items.filter(
      item => ~item.title.toUpperCase().indexOf(searchStr)
    ) : items;

    const pageSize = PAGE_SIZE;
    const pageCount = Math.ceil(filteredItems.length / pageSize);
    const firstIndex = (page - 1) * pageSize;
    const lastIndex = firstIndex + pageSize - 1;
    const paginatedItems = filteredItems.filter(
      (item, index) => firstIndex <= index && index <= lastIndex
    );
    const pieChartData = filteredItems.map(
      (item) => ([item.text, item.meta.like || 0])
    );

    const links = Array.apply(null, {length: pageCount}).map((n,i) => (
      postsPath(Object.assign({}, params, {page: i + 1}))
    ));

    return (
      <BlogPageView
        listItems={paginatedItems}
        likeItem={this.likePost}
        page={+page}
        pageLinks={links}
        search={this.doSearch}
        chartItems={pieChartData}
        />
    );
  }
}

BlogPage.propTypes = {
  location: PropTypes.object
};

export default BlogPage;
