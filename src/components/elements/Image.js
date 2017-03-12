import React, { PropTypes } from 'react';

import { Item } from 'semantic-ui-react';

// const Image = props => React.createElement('img', Object.assign({}, props));
const Image = ({src}) => (
  <Item.Image size='tiny' src={src} />
);

Image.propTypes = {
  src: PropTypes.string
};

export default Image;
