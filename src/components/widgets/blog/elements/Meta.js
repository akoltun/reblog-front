import React, { PropTypes } from 'react';

import DateTime from './DateTime';
import Like from './Like';

const Meta = ({author, created, updated, like, likeCallback}) => (
  <ul>
    <li><Like like={like} likeCallback={likeCallback} /></li>
    <li>Автор: {author}</li>
    <li>Создано: <DateTime>{created}</DateTime></li>
    <li>Обновлено: <DateTime>{updated}</DateTime></li>
  </ul>
);

Like.defaultProps = {
  like: 0,
  author: '<unknown>',
  created: new Date(),
  updated: new Date()
};

Meta.propTypes = {
  like: PropTypes.number,
  likeCallback: PropTypes.func,
  author: PropTypes.string,
  created: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  updated: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default Meta;
