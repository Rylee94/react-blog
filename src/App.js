// root component of react app
// jsx (html style templates in js)
// babel transpiles jsx into html and renders to the DOM
// use className instead of class (reserved keyword in js). babel transforms className to class, can see in console.

// if using react version <17.0.0, import react at top of components
// can use self closing or closing tag to add componenets
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create" element={<Create />}></Route>
            {/* :id is a route parameter */}
            <Route path="/blogs/:id" element={<BlogDetails />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

// DYNAMIC VARIABLE EXAMPLES
// curly  braces with variable name
// can't output booleans or objects

// const title = "Welcome the the Blog";
// {/* <h1>{ title }</h1>

// const likes = 50;
// <p>Likes { likes } times</p>

// cannot output an object like this:
// const person = { name: "rylee", age: 29}
// <p> { person }</p>

// can write dynamic values directly in curly braces
// <p>{ 10 }</p>
// <p>{ "hello world" }</p>
// <p>{ [1, 2, 3, 4, 5] }</p>
// <p>{ Math.random() * 100 }</p>

// can use dynamic values as attribute values in element tags
// const link = "http://www.google.com";
// <a href={ link }>Google</a>
