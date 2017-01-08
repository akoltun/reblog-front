import React from 'react';

import moment from 'moment';

import { DEFAULT_DATE_TIME_FORMAT } from 'constants/Date';

// const TextBox = ({ children }) => React.createElement('p', null, children);
const DateTime = ({children}) => (
  <span>
    {moment(children).format(DEFAULT_DATE_TIME_FORMAT)}
  </span>
);

export default DateTime;
