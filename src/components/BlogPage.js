import React from 'react';
import request from 'superagent';

import { cloneDeep } from 'lodash';

import BlogList from 'components/widgets/blog/List';
import PieChart from 'components/widgets/blog/PieChart';
import Search from 'components/widgets/blog/Search';

import { Grid } from 'semantic-ui-react';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], filteredItems: [] };
    this.likePost = this.likePost.bind(this);
    this.doSearch = this.doSearch.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      'http://localhost:3002/',
      {},
      (err, res) => this.setState({ items: res.body, filteredItems: res.body })
    );
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
    const { items } = this.state;
    const searchStr = event.currentTarget.value.toUpperCase();

    this.setState({
      filteredItems: searchStr ? items.filter(
        item => ~item.title.toUpperCase().indexOf(searchStr)
      ) : items
    });
  }

  render() {
    const { filteredItems } = this.state;
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

export default BlogPage;
