import React, { PropTypes } from 'react';

import { Grid } from 'semantic-ui-react';
import BlogList from 'components/widgets/blog/List';
import PieChart from 'components/widgets/blog/PieChart';
import Search from 'components/widgets/blog/Search';
import Paginator from 'components/widgets/blog/Paginator';

const BlogPageView = (
  { items, likeItem, page, link, params, search, searchCallback }
) => (
  <Grid columns={2} divided>
    <Grid.Row>
      <Paginator
        as={Grid.Column}
        attrs={{width: 10}}
        page={page}
        items={items}
        link={link}
        params={params}
        list={BlogList}
        listAttrs={{likeCallback: likeItem}}
        />

      <Grid.Column width={6}>
        <Grid.Row>
          <Search defaultValue={search} onChange={searchCallback}/>
        </Grid.Row>

        <Grid.Row>
          <PieChart items={items} />
        </Grid.Row>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

BlogPageView.propTypes = {
  items: PropTypes.array,
  likeItem: PropTypes.func,
  page: PropTypes.number,
  link: PropTypes.string,
  params: PropTypes.object,
  search: PropTypes.string,
  searchCallback: PropTypes.func
};

export default BlogPageView;
