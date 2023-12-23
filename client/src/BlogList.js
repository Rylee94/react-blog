// blogs property  from Home.js is passed as props object to BlogList
import { Link } from "react-router-dom";
const BlogList = ({ blogs, title }) => {
  // another way to write props - add (props)
  //   const blogs = props.blogs;
  //   const title = props.title;

  // access blogs from Home component
  // const blogs = props.blogs;
  // const title = props.title;

    return (
      <div className="blog-list">
        {blogs.map(blog => (
          <div className="blog-preview" key={blog.id} >
            <Link to={`/blogs/${blog.id}`}>
              <h2>{ blog.title }</h2>
              <p>Written by { blog.author }</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }
   
  export default BlogList;
