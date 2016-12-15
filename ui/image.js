const Image = opts => React.createElement('img', opts);

ReactDOM.render(
  React.createElement(Image, {
    src: 'https://facebook.github.io/react/img/logo.svg', 
    width: 64,
    height: 64,
    alt: 'React logo'
  }),
  document.getElementById('app')
);