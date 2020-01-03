import React from "react";
import { connect } from "react-redux";
import Post from "./Post";
import EditPostForm from "./EditPostForm";

const AllPosts = props => {
  console.log(props);
  return (
    <React.Fragment>
      <h4>All Posts</h4>
      <br></br>
      {props.posts.map(post => {
        return (
          <div key={post.id}>
            {post.editing ? <EditPostForm key={post.id} post={post}/> : <Post key={post.id} post={post} />}
          </div>
        );
      })}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(AllPosts);
