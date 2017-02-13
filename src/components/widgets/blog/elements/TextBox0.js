import React from 'react';

import moment from 'momemnt';

// const TextBox = ({ children }) => React.createElement('p', null, children);
const TextBox = ({children}) => (
  <p>{children}</p>
);const DateTime = ({children}) => (
  {moment({children}).format('DD.MM.YYYY')}
);


export default TextBox;
