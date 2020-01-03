import React from "react";
import { connect } from "react-redux";

const PostForm = props => {
  // console.log(props);
  let titleField = React.createRef();
  let messageField = React.createRef();

  const handleAddPost = e => {
    e.preventDefault();
    // console.log(titleField);
    // console.log(messageField);
    let newPost = {
      id: new Date(),
      title: titleField.current.value,
      message: messageField.current.value,
      editing: false
    };
    props.dispatch({
      type: "ADD_POST",
      post: newPost
    });
    titleField.current.value = "";
    messageField.current.value = "";
  };

  return (
    <React.Fragment>
      <h4>Add New Post</h4>
      <br></br>
      <form style={{ width: "40%" }}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            required
            autoFocus
            placeholder="Enter post title"
            ref={titleField}
          />
        </div>
        <div className="form-group">
          <textarea
            rows="6"
            cols="25"
            className="form-control"
            placeholder="Enter post message"
            ref={messageField}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleAddPost}
        >
          Add Post
        </button>
      </form>
      <br></br>
    </React.Fragment>
  );
};

export default connect()(PostForm);
