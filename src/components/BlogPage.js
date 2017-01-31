import React, { PropTypes } from 'react';
import request from 'superagent';
import qs from 'qs';

import { cloneDeep } from 'lodash';
import { browserHistory as history } from 'react-router';

import BlogList from 'components/widgets/blog/List';
import PieChart from 'components/widgets/blog/PieChart';
import Search from 'components/widgets/blog/Search';
import { postsPath } from 'helpers/routes';

import { Grid } from 'semantic-ui-react';

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
      .then(posts => this.setState({ items: posts }));
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
    const searchStr = (this.queryParams().search || '').toUpperCase();
    const { items } = this.state;
    const filteredItems = searchStr ? items.filter(
      item => ~item.title.toUpperCase().indexOf(searchStr)
    ) : items;
    const pieChartData = filteredItems.map(
      (item) => ([item.text, item.meta.like || 0])
    );

    return (
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column width={10}>
            <BlogList items={filteredItems} likeCallback={this.likePost} />
          </Grid.Column>

          <Grid.Column width={6}>
            <Grid.Row>
              <Search onChange={this.doSearch}/>
            </Grid.Row>

            <Grid.Row>
              <PieChart data={pieChartData} />
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

BlogPage.propTypes = {
  location: PropTypes.object
};

export default BlogPage;
