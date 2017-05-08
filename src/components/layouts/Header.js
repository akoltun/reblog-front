import React from 'react';

import { Header as SemanticHeader, Menu } from 'semantic-ui-react';
import Link from 'components/elements/Link';

import { contactsPath, aboutPath } from 'helpers/routes';

const Header = () => (
  <SemanticHeader>
    <Menu>
      <Menu.Item><Link to='/'>Фрэймворк блог</Link></Menu.Item>
      <Menu.Item><Link to={contactsPath()}>Обратная связь</Link></Menu.Item>
      <Menu.Item><Link to={aboutPath()}>О блоге</Link></Menu.Item>
    </Menu>
  </SemanticHeader>
);

export default Header;
