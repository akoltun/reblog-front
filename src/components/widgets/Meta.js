import React, { PropTypes } from 'react';

import DateTime from 'components/elements/DateTime';
import Like from 'components/elements/Like';

const Meta = ({author, created, updated, likes}) => (
  <ul>
    <li><Like {...likes} /></li>
    <li>Автор: {author}</li>
    <li>Создано: <DateTime>{created}</DateTime></li>
    <li>Обновлено: <DateTime>{updated}</DateTime></li>
  </ul>
);

Meta.defaultProps = {
  likes: { count: 0 },
  author: '<unknown>',
  created: new Date(),
  updated: new Date()
};

Meta.propTypes = {
  likes: PropTypes.object,
  author: PropTypes.string,
  created: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  updated: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default Meta;
