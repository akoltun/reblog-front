import React from 'react';

import { Segment, Header as SemanticHeader, Icon } from 'semantic-ui-react';

const Header = () => (
  <Segment textAlign='center'>
    <SemanticHeader>
      Привет!&nbsp;
      <Icon name='newspaper' />
    </SemanticHeader>
  </Segment>
);

export default Header;
