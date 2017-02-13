import React, { PropTypes } from 'react';

import Header from './Header';
import Footer from './Footer';
import { Container } from 'semantic-ui-react';

const MainLayout = ({children}) => (
  <Container>
    <Header />
    {children}
    <Footer />
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
