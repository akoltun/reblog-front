import React from 'react';

import { Segment } from 'semantic-ui-react';
import Helmet from 'react-helmet';

import GoodWishesForm from 'components/widgets/GoodWishesForm';

const AboutPage = () => (
  <div>
    <Helmet
      title="О блоге"
    />
    <Segment>
      Отправьте Ваше мнение о блоге
      <br /><br />
      <GoodWishesForm />
    </Segment>
  </div>
);

export default AboutPage;
