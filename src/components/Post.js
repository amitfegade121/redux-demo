import React from "react";
import { connect } from "react-redux";

const Post = props => {
  const { post } = props;

  const handleDeletePost = id => {
    props.dispatch({
      type: "DELETE_POST",
      postId: id
    });
  };
  const handleEditPost = id => {
    props.dispatch({
      type: "EDIT_POST",
      postId: id
    });
  };
  return (
    <React.Fragment>
      <div className="card" style={{ width: "45%" }}>
        <div className="card-header">{post.title}</div>
        <div className="card-body">{post.message}</div>
        <button
          className="btn btn-primary"
          onClick={() => handleEditPost(post.id)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={() => handleDeletePost(post.id)}
        >
          Delete
        </button>
      </div>
      <br></br>
      <br></br>
    </React.Fragment>
  );
};

export default connect()(Post);
