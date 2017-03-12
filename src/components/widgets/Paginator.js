import React, { PropTypes } from 'react';

import { Menu } from 'semantic-ui-react';

import Link from 'components/elements/Link';

const Paginator = ({ page, links }) => (
  links.length > 1 && (
    <Menu pagination>
      {links.map((link, index) => (
        <Menu.Item
          key={index}
          active={index + 1 == page}
          width={10}
        >
          <Link to={link}>{index + 1}</Link>
        </Menu.Item>
      ))}
    </Menu>
  )
);

Paginator.defaultProps = {
  page: 1,
};

Paginator.propTypes = {
  page: PropTypes.number,
  links: PropTypes.array
};

export default Paginator;
