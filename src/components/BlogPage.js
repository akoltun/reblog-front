import React from 'react';

import { items as staticItems } from 'constants/static/items';

import { cloneDeep } from 'lodash';

import BlogList from 'components/widgets/blog/List';
import PieChart from 'components/widgets/blog/PieChart';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: staticItems };
    this.likePost = this.likePost.bind(this);
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

  render() {
    const { items } = this.state;
    const pieChartData = items.map(
      (item) => ([item.text, item.meta.like || 0])
    );
    return (
      <div>
        <PieChart data={pieChartData} />
        <BlogList items={items} likeCallback={this.likePost} />
      </div>
    );
  }
}

export default BlogPage;