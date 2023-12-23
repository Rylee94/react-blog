// 'sfc tab' to get stateless functional component
// can use arrow function or function declaration

// import { useEffect, useState } from "react";
// import BlogList from "./BlogList";
// import useFetch from "./useFetch";

import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  const {
    data: blogs,
    loading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {/*props being imported to  BlogList componenet */}
      {/* function as prop: handleDelete={handleDelete */}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;

// BUTTON EXAMPLES

// const handleClick = () => {
//   console.log("hello world");
// };
// <button onClick={handleClick}>CLick Me</button>

// const handleClickAgain = (name) => {
//   console.log("hello " + name);
// }
// <button onClick={() => handleClickAgain("Rylee")}>Click Me Again</button>

// EVENT PARAM EXAMPLES
// const handleClick = () => {
//   console.log("hello world");
// };
// automatically gets access to event parameter
// <button onClick={handleClick}>CLick Me</button>

// const handleClickAgain = (name, e) => {
//   console.log("hello " + name, e.target);
// }
// <button onClick={(e) => handleClickAgain("Rylee", e)}>Click Me Again</button>

// HOOKS

// useState
// import { useState } from "react";

// const Home = () => {
//   const [name, setName] = useState("mario");
// const [age, setAge] = useState(25);
//   const handleClick = () => {
//     setName("luigi");
//     setAge(30);
//   };
//   return (
//     <div className="home">
//       <h2>Welcome</h2>
//       <p>{name} is { age }</p>
//       <button onClick={handleClick}>CLick Me</button>
//     </div>
//   );
// };

// OUTPUTTING LISTS
// import { useState } from "react";
// const Home = () => {
//   const [blogs, setBlogs] = useState([
//     { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
//     { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
//     { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
//   ]);
//   return (
//     <div className="home">
//       {blogs.map((blog) => (
//         <div className="blog-preview" key={blog.id}>
//           <h2>{blog.title}</h2>
//           <p>Written by {blog.author}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// REUSING A COMPONENT
// const Home = () => {
//   const [blogs, setBlogs] = useState([
//     { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
//     { title: "cOOL", body: "lorem ipsum...", author: "mario", id: 2 },
//     { title: "NICE", body: "lorem ipsum...", author: "mario", id: 3 },
//   ]);
//   return (
//     <div className="home">
//       {/*props being imported to  BlogList componenet */}
//       <BlogList blogs={blogs} title="All Blogs" />
//       <BlogList
//         blogs={blogs.filter((blog) => blog.author === "mario")}
//         title="All Blogs"
//       />
//     </div>
//   );
// };
