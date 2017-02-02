import React, { PropTypes } from 'react';

import { queryString } from 'helpers/routes';
import Pagination from 'components/elements/Pagination';

import { PAGE_SIZE } from 'constants/Pagination';

const Paginator = (
  {page, pageSize, items, link, params, list, listAttrs, as, attrs }
) => {
  const pageCount = Math.ceil(items.length / pageSize);
  const firstIndex = (page - 1) * pageSize;
  const lastIndex = firstIndex + pageSize - 1;
  const paginatedItems = items.filter(
    (item, index) => firstIndex <= index && index <= lastIndex
  );
  const links = Array.apply(null, {length: pageCount}).map((n,i) => (
    link + queryString(Object.assign({}, params, {page: i + 1}))
  ));

  return React.createElement(as, attrs, [
    React.createElement(
      list,
      Object.assign({}, listAttrs, {key: 0, items: paginatedItems})
    ),
    React.createElement(Pagination, {key: 1, page, links})
  ]);
};

Paginator.defaultProps = {
  pageSize: PAGE_SIZE,
  as: 'div',
  attrs: {}
};

Paginator.propTypes = {
  page: PropTypes.number,
  pageSize: PropTypes.number,
  items: PropTypes.array,
  link: PropTypes.string,
  params: PropTypes.object,
  list: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  listAttrs: PropTypes.object,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  attrs: PropTypes.object
};

export default Paginator;
