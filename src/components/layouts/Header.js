import React from 'react';

import { Segment, Header as SemanticHeader, Icon } from 'semantic-ui-react';
import Link from 'components/elements/Link';

import { aboutPath } from 'helpers/routes';

const Header = () => (
  <Segment textAlign='center'>
    <SemanticHeader>
      <Link to='/'>Фрэймворк блог</Link>
      &nbsp;
      <Icon name='newspaper' />
      <Link to={aboutPath()}>О блоге</Link>
    </SemanticHeader>
  </Segment>
);

export default Header;
