import React, { PropTypes } from 'react';

import { Item, Divider, Menu } from 'semantic-ui-react';
import BlogItem from './Item';
import { PAGE_SIZE } from 'constants/Pagination';

class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.changePage = this.changePage.bind(this);
  }

  changePage(event, {name}) {
    this.props.changePage(name);
  }

  render() {
    const { items, page, pageSize, ...others } = this.props;
    const pageCount = Math.ceil(this.props.items.length / pageSize);
    const firstIndex = (page - 1) * pageSize;
    const lastIndex = firstIndex + pageSize - 1;
    const paginatedItems = items.filter(
      (item, index) => firstIndex <= index && index <= lastIndex
    );

    return (
      <Item.Group>
        {paginatedItems.map((item) => (
          <div key={item.id}>
            <BlogItem item={item} {...others} />
            <Divider />
          </div>
        ))}
        {pageCount > 1 && (
          <Menu pagination key={0}>
            {Array.apply(null, {length: pageCount}).map((n,i) => (
              <Menu.Item
                name={String(i + 1)}
                active={page == i + 1}
                onClick={this.changePage} />
            ))}
          </Menu>
        )}
      </Item.Group>
    );
  }
}

BlogList.defaultProps = {
  page: 1,
  pageSize: PAGE_SIZE,
  queryParams: {}
};

BlogList.propTypes = {
  items: PropTypes.array,
  page: PropTypes.number,
  pageSize: PropTypes.number,
  changePage: PropTypes.func
};

export default BlogList;
