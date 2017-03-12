import React, { PropTypes } from 'react';
import { range } from 'lodash/util';

import Paginator from 'components/widgets/Paginator';

const PaginatorContainer = ({ pageCount, page, createLink }) => (
  <Paginator
    page={page}
    links={range(pageCount).map((n,i) => createLink({page: i + 1}))}
  />
);

PaginatorContainer.defaultProps = {
  currentPage: 1
};

PaginatorContainer.propTypes = {
  pageCount: PropTypes.number,
  page: PropTypes.number,
  createLink: PropTypes.func,
};

export default PaginatorContainer;
