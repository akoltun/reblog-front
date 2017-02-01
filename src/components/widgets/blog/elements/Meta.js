import React, { PropTypes } from 'react';

import DateTime from './DateTime';
import Like from './Like';
//const Meta = ({author, created, updated}) => React.createElement('ul', null, [
//   React.createElement('li', {key: 'author'}, `Автор: ${author}`),
//   React.createElement('li', {key: 'created'}, `Создано: ${created}`),
//   React.createElement('li', {key: 'updated'}, `Обновлено: ${updated}`)
// ]);
const Meta = ({author, created, updated, like}) => (
  <ul>
    <li><Like like={like} /></li>
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

DateTime.propTypes = {
  like: PropTypes.number,
  author: PropTypes.string,
  created: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  updated: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default Meta;
