const Image = opts => React.createElement('img', Object.assign({}, opts));

const TextBox = ({ children }) => React.createElement('span', null, children);

const BlogItem = ({ image, children }) => (
  <div style={{clear: 'left', paddingTop: 10}}>
    <Image src={image} height="64" style={{marginRight:10, float: "left"}}/>
    <TextBox>{children}</TextBox>
  </div>
)
  
ReactDOM.render(
  (
    <div>
      <BlogItem image="https://facebook.github.io/react/img/logo.svg">Это значок Реакта (хотя он и не совсем фрэймворк)</BlogItem>
      <BlogItem image="https://angular.io/resources/images/logos/angular2/angular.svg">А это конкурирующий фрэймворк</BlogItem>
      <BlogItem image="http://aurelia.io/images/main-logo.svg">А это еще один фрэймворк</BlogItem>
    </div>
  ),
  document.getElementById('app')
);
