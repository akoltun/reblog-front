import React from 'react';

// const Image = props => React.createElement('img', Object.assign({}, props));
const Image = props => (
  <img {...props} />
);

export default Image;
