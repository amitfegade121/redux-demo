const initState = {
  posts: []
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_POST":
      state.posts = [...state.posts, action.post];
      return {
        posts: state.posts
      };
    case "DELETE_POST":
      state.posts = state.posts.filter(post => post.id != action.postId);
      return {
        posts: state.posts
      };
    case "EDIT_POST":
      state.posts = state.posts.map(post =>
        post.id === action.postId ? { ...post, editing: !post.editing } : post
      );
      return {
        posts: state.posts
      };
    case "UPDATE_POST":
      state.posts = state.posts.map(post =>
        post.id === action.post.id ? { ...action.post } : post
      );
      return {
        posts: state.posts
      };

    default:
      return state;
  }
};

export default postReducer;
