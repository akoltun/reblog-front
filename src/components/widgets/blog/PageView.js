import React, { PropTypes } from 'react';

import { Grid } from 'semantic-ui-react';
import BlogList from 'components/widgets/blog/List';
import Pagination from 'components/elements/Pagination';
import PieChart from 'components/widgets/blog/PieChart';
import Search from 'components/widgets/blog/Search';

const BlogPageView = (
  { listItems, likeItem, page, pageLinks, search, chartItems }
) => (
  <Grid columns={2} divided>
    <Grid.Row>
      <Grid.Column width={10}>
        <BlogList
          items={listItems}
          likeCallback={likeItem}/>
        <Pagination
          page={page}
          links={pageLinks} />
      </Grid.Column>

      <Grid.Column width={6}>
        <Grid.Row>
          <Search onChange={search}/>
        </Grid.Row>

        <Grid.Row>
          <PieChart items={chartItems} />
        </Grid.Row>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

BlogPageView.propTypes = {
  listItems: PropTypes.array,
  likeItem: PropTypes.func,
  page: PropTypes.number,
  pageLinks: PropTypes.array,
  search: PropTypes.func,
  chartItems: PropTypes.array
};

export default BlogPageView;
