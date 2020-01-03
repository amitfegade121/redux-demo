import React from "react";
import { connect } from "react-redux";

const EditPostForm = props => {
  const { post } = props;
  let titleField = React.createRef();
  let messageField = React.createRef();

  const handleUpdatePost = () => {
    const updatedPost = {
      id: post.id,
      title: titleField.current.value,
      message: messageField.current.value,
      editing: !post.editing
    };
    props.dispatch({
      type: "UPDATE_POST",
      post: updatedPost
    });
  };

  return (
    <React.Fragment>
      <form style={{ width: "40%" }}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            required
            defaultValue={post.title}
            placeholder="Enter Post Title"
            ref={titleField}
          />
        </div>
        <div className="form-group">
          <textarea
            rows="6"
            cols="25"
            className="form-control"
            defaultValue={post.message}
            placeholder="Enter Post Message"
            ref={messageField}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleUpdatePost}
        >
          Update Post
        </button>
      </form>
    </React.Fragment>
  );
};

export default connect()(EditPostForm);
