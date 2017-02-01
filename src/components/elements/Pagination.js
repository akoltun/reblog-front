import React, { PropTypes } from 'react';

import { Menu } from 'semantic-ui-react';
import Link from 'components/elements/Link';

const Pagination = ({ page, links }) => {
  return links.length > 1 && (
    <Menu pagination>
      {links.map((link, index) => (
        <Menu.Item
          key={index}
          active={index + 1 == page}>
          <Link to={link}>{index + 1}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

Pagination.defaultProps = {
  page: 1,
};

Pagination.propTypes = {
  page: PropTypes.number,
  links: PropTypes.array
};

export default Pagination;
