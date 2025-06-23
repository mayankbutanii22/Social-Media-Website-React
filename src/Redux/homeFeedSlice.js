import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('homeFeed/fetchPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json();


  // Map the data to match your post structure
  return data.map((item, index) => ({
    id: item.id,
    username: `user${index + 1}@mail.com`,
    content: item.body,
    likes: Math.floor(Math.random() * 10),
    timestamp: new Date().toISOString(),
  }));
});




// export const fetchPosts = createAsyncThunk('homeFeed/fetchPosts', async () => {
//   // Simulating an API call
//   return [
//     { id: 1, username: 'mayankbutanii22@gmail.com', content: 'React is awesome', likes: 0, timestamp: '2025-05-28T10:00:00Z' },
//     { id: 2, username: 'devkunwar98@gmail.com', content: 'Redux is awesome', likes: 0, timestamp: '2025-05-28T11:00:00Z' },
//   ];
// });

const homeFeedSlice = createSlice({
  name: 'homeFeed',
  initialState: {
    posts: [],
    status: 'idle', // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.unshift(action.payload);
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    updatePost: (state, action) => {
      const { id, content } = action.payload;
      const existingPost = state.posts.find((post) => post.id === id);
      if (existingPost) {
        existingPost.content = content;
      }
    },
    likePost: (state, action) => {
      const post = state.posts.find((post) => post.id === action.payload);
      if (post) {
        post.likes += 1;
      }
    },
    disLikePost: (state, action) => {
    const post = state.posts.find((post) => post.id === action.payload);
    if (post && post.likes > 0) {
      post.likes -= 1;
    }
  },
    sortPostsByTime: (state) => {
      state.posts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    },
    sortPostsByLikes: (state) => {
      state.posts.sort((a, b) => b.likes - a.likes);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { 
  addPost, 
  deletePost, 
  updatePost, 
  likePost,
  disLikePost, 
  sortPostsByTime, 
  sortPostsByLikes 
} = homeFeedSlice.actions;

export default homeFeedSlice.reducer;

