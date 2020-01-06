import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PostForm from "./components/PostForm";
import AllPosts from "./components/AllPosts";
import Test from "./components/Test";

function App() {
  return (
    <div className="container">
      <PostForm />
      <AllPosts />
      {/* <Test /> */}
    </div>
  );
}

export default App;
