// 'sfc tab' to get stateless functional component
// can use arrow function or function declaration

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;

// example of inline styling
//   style={{
//     color: "white",
//     backgroundColor: "#35f1c2",
//     borderRadius: "8px",
//   }}

// react intercepts the server request and handles the routing in the browser
{/* <a href="/">Home</a> -> <Link to="/">Home</Link> */}
// console elements will show anchor tag and server will still try to send a request to the server
// react-router Link tag prevents the request to the server. looks for path instead and injects component onto page
