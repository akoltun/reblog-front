import React, { PropTypes } from 'react';

import { Grid } from 'semantic-ui-react';

import Search from 'components/elements/Search';
import Loader from 'components/widgets/Loader';
import BlogList from 'components/widgets/BlogList';
import PaginatedListContainer
  from 'components/containers/PaginatedListContainer';
import PaginatorContainer from 'components/containers/PaginatorContainer';
import PieChartContainer from 'components/containers/PieChartContainer';

const BlogPage = ({
  items,
  isRequesting,
  page, pageCount, gotoPage,
  search, searchStrChanged
}) => (
  <Loader loading={isRequesting}>
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column>
          <PaginatedListContainer
            as={BlogList}
            items={items}
            page={page}
          />
          <PaginatorContainer
            pageCount={pageCount}
            page={page}
            createLink={gotoPage}
          />
        </Grid.Column>

        <Grid.Column width={6}>
          <Grid.Row>
            <Search defaultValue={search} onChange={searchStrChanged}/>
          </Grid.Row>

          <Grid.Row>
            <PieChartContainer items={items} />
          </Grid.Row>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Loader>
);

BlogPage.propTypes = {
  items: PropTypes.array,
  isRequesting: PropTypes.bool,
  error: PropTypes.bool,
  page: PropTypes.number,
  pageCount: PropTypes.number,
  gotoPage: PropTypes.func,
  search: PropTypes.string,
  searchStrChanged: PropTypes.func
};

export default BlogPage;
