import React from 'react';

import { Segment } from 'semantic-ui-react';
import Helmet from 'react-helmet';

const AboutPage = () => (
  <div>
    <Helmet
      title="О блоге"
    />
    <Segment>This is about page</Segment>
  </div>
);

export default AboutPage;
