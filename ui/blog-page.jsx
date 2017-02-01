const Image = opts => React.createElement('img', Object.assign({}, opts));

const TextBox = ({ children }) => React.createElement('span', null, children);

const BlogItem = ({ image, children }) => (
  <div style={{clear: 'left', paddingTop: 10}}>
    <Image src={image} height="64" style={{marginRight:10, float: "left"}}/>
    <TextBox>{children}</TextBox>
  </div>
);
 
const BlogList = ({ list }) => (
  <div>
    {list.map((item, index) => (
      <BlogItem key={index} image={item.image}>{item.text}</BlogItem>
    ))}
  </div>
);

const blogPosts = [
  { image: "https://facebook.github.io/react/img/logo.svg", text: "Это значок Реакта (хотя он и не совсем фрэймворк)" },
  { image: "https://angular.io/resources/images/logos/angular2/angular.svg", text: "А это конкурирующий фрэймворк" },
  { image: "http://aurelia.io/images/main-logo.svg", text: "А это еще один фрэймворк" },
];

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { blogPosts };
  }
  
  render() {
    const { blogPosts} = this.state;
    return React.createElement(BlogList, { list: blogPosts });
  }
}

ReactDOM.render(
  React.createElement(BlogPage), 
  document.getElementById('app')
);