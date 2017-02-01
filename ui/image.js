const Image = props => React.createElement('img', Object.assign({}, props));

ReactDOM.render(
  React.createElement(Image, {
    src: 'https://facebook.github.io/react/img/logo.svg', 
    width: 64,
    height: 64,
    alt: 'React logo'
  }),
  document.getElementById('app')
);