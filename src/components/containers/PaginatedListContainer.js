import React, { PropTypes } from 'react';

import { PAGE_SIZE } from 'constants/Pagination';

const PaginatedListContainer = ({
  as,
  items,
  page,
  pageSize,
  ...others
}) => {
  const index = (page - 1) * pageSize;
  const paginatedItems = items.slice(index, index + pageSize);

  return React.createElement(
    as,
    Object.assign({}, others, {items: paginatedItems})
  );
};

PaginatedListContainer.defaultProps = {
  page: 1,
  pageSize: PAGE_SIZE,
};

PaginatedListContainer.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  items: PropTypes.array,
  page: PropTypes.number,
  pageSize: PropTypes.number,
};

export default PaginatedListContainer;
