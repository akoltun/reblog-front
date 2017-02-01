const TextBox = ({ children }) => React.createElement('span', null, children);

ReactDOM.render(
  React.createElement(TextBox, null, 'Вставляем текст'),
  document.getElementById('app')
);