import React, { PropTypes } from 'react';

import { Segment, Dimmer, Loader as SemanticLoader } from 'semantic-ui-react';

const Loader = ({ as, loading, loadingMessage, children}) => (
  <Dimmer.Dimmable as={as} dimmed={loading}>
    <Dimmer active={loading} inverted>
      <SemanticLoader>{loadingMessage}</SemanticLoader>
    </Dimmer>
    {children}
  </Dimmer.Dimmable>
);

Loader.defaultProps = {
  loadingMessage: 'Loading...',
  as: Segment
};

Loader.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  loading: PropTypes.bool,
  loadingMessage: PropTypes.string,
  children: PropTypes.node
};

export default Loader;
