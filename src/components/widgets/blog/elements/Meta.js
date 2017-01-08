import React from 'react';

import DateTime from './DateTime';
//const Meta = ({author, created, updated}) => React.createElement('ul', null, [
//   React.createElement('li', {key: 'author'}, `Автор: ${author}`),
//   React.createElement('li', {key: 'created'}, `Создано: ${created}`),
//   React.createElement('li', {key: 'updated'}, `Обновлено: ${updated}`)
// ]);
const Meta = ({author, created, updated}) => (
  <ul>
    <li>Автор: {author}</li>
    <li>Создано: <DateTime>{created}</DateTime></li>
    <li>Обновлено: <DateTime>{updated}</DateTime></li>
  </ul>
);

export default Meta;
