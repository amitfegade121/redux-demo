import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PostForm from "./components/PostForm";
import AllPosts from "./components/AllPosts";

function App() {
  return (
    <div className="container">
      <PostForm />
      <AllPosts />
    </div>
  );
}

export default App;
