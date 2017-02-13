import React, { PropTypes } from 'react';

import { Grid } from 'semantic-ui-react';

import Loader from 'components/widgets/Loader';
import BlogList from 'components/widgets/BlogList';
import PaginatedListContainer
  from 'components/containers/PaginatedListContainer';
import PaginatorContainer from 'components/containers/PaginatorContainer';
import SearchContainer from 'components/containers/SearchContainer';
import PieChartContainer from 'components/containers/PieChartContainer';
import { queryString, postsPath } from 'helpers/routes';
import { PAGE_SIZE } from 'constants/Pagination';

const createLink = (linkParams) => (params) => (
  postsPath() + queryString(Object.assign({}, linkParams, params))
);

const BlogPage = (
  { items, isRequesting, page, search, likes, likePost }
) => (
  <Loader loading={isRequesting}>
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column>
          <PaginatedListContainer
            as={BlogList}
            items={items}
            page={page}
            likes={likes}
            likePost={likePost}
          />
          <PaginatorContainer
            pageCount={Math.ceil(items.length / PAGE_SIZE)}
            page={page}
            createLink={createLink({search})}
          />
        </Grid.Column>

        <Grid.Column width={6}>
          <Grid.Row>
            <SearchContainer search={search} onChange={createLink({page})}/>
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
  likes: PropTypes.object,
  likePost: PropTypes.func,
  page: PropTypes.number,
  search: PropTypes.string,
};

export default BlogPage;
