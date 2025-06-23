import { createSlice } from '@reduxjs/toolkit';

const createPostSlice = createSlice({
  name: 'createPost',
  initialState: {
    posts: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.unshift(action.payload);
    },
    editPost: (state, action) => {
      const post = state.posts.find(p => p.id === action.payload.id);
      if (post) post.content = action.payload.content;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter(p => p.id !== action.payload);
    },
  },
});

export const { addPost, editPost, deletePost } = createPostSlice.actions;
export default createPostSlice.reducer;
