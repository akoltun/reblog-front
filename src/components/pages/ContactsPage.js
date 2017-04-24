import React from 'react';

import { Segment } from 'semantic-ui-react';
import Helmet from 'react-helmet';

import ContactsForm from 'components/widgets/ContactsForm';

const ContactsPage = () => (
  <div>
    <Helmet
      title="Обратная связь"
    />
    <Segment>
      <ContactsForm />
    </Segment>
  </div>
);

export default ContactsPage;
