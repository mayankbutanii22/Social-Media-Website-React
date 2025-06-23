import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  exploreItems: [
    {
      id: 1,
      type: 'image',
      url: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg',
      liked: false,
      comments: []
    },
    {
      id: 2,
      type: 'reel',
      url: 'https://cdn.pixabay.com/video/2023/08/02/180773-858190423_large.mp4', // fixed URL
      liked: false, 
      comments: [],
    },
    {
      id: 3,
      type: 'post',
      url: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
      liked: false,
      comments: ['Awesome!', 'Wow']
    },
    {
      id: 4,
      type: 'image',
      url: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg',
      liked: false,
      comments: []
    },
    {
      id: 5,
      type: 'reel',
      url: 'https://cdn.pixabay.com/video/2023/10/24/189658-878670001_large.mp4', // fixed URL
      liked: false,
      comments: [],
    },
    {
      id: 6,
      type: 'post',
      url: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg',
      liked: false,
      comments: ['Beautiful!', 'Great view']
    },
    {
      id: 7,
      type: 'image',
      url: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
      liked: false,
      comments: []
    },
    {
      id: 8,
      type: 'reel',
      url: 'https://cdn.pixabay.com/video/2023/04/05/161881-812701288_large.mp4', // fixed URL
      liked: false,
      comments: []
    },
    {
      id: 9,
      type: 'post',
      url: 'https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg',
      liked: false,
      comments: ['Cool!', 'Interesting']
    },
    {
      id: 10,
      type: 'image',
      url: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg',
      liked: false,
      comments: []
    },
    {
      id: 11,
      type: 'reel',
      url: 'https://cdn.pixabay.com/video/2023/11/08/190585-880428747_large.mp4', // fixed URL
      liked: false,
      comments: []
    },
    {
      id: 12,
      type: 'post',
      url: 'https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg',
      liked: false,
      comments: ['Lovely!', 'Beautiful']
    },
    {
      id: 13,
      type: 'image',
      url: 'https://images.pexels.com/photos/34950/pexels-photo.jpg',
      liked: false,
      comments: []
    },
    {
      id: 14,
      type: 'reel',
      url: 'https://cdn.pixabay.com/video/2023/11/01/190198-880192837_large.mp4', // replaced with new working URL
      liked: false,
      comments: []
    },
    {
      id: 15,
      type: 'post',
      url: 'https://images.pexels.com/photos/248771/pexels-photo-248771.jpeg',
      liked: false,
      comments: ['Amazing!', 'Wonderful']
    },
    {
      id: 16,
      type: 'image',
      url: 'https://images.pexels.com/photos/349758/pexels-photo-349758.jpeg',
      liked: false,
      comments: []
    },
    {
      id: 17,
      type: 'reel',
      url: 'https://cdn.pixabay.com/video/2023/09/11/184119-872749764_large.mp4', // fixed URL
      liked: false,
      comments: []
    },
    {
      id: 18,
      type: 'post',
      url: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg',
      liked: false,
      comments: ['Beautiful!', 'Great view']
    },
    {
      id: 19,
      type: 'image',
      url: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
      liked: false,
      comments: []
    },
    {
      id: 20,
      type: 'reel',
      url: 'https://cdn.pixabay.com/video/2023/05/30/168968-833090275_large.mp4',
      liked: false,
      comments: []
    },
    {
      id: 21,
      type: 'post',
      url: 'https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg',
      liked: false,
      comments: ['Awesome!', 'Wow']
    },
    {
      id: 22,
      type: 'image',
      url: 'https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=',
      liked: false,
      comments: []
    },
    {
      id: 23,
      type: 'reel',
      url: 'https://cdn.pixabay.com/video/2023/06/27/171900-837136367_large.mp4',
      liked: false,
      comments: []
    },
    {
      id: 24,
      type: 'post',
      url: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg',
      liked: false,
      comments: ['Beautiful!', 'Great view']
    },
    {
      id: 25,
      type: 'image',
      url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg',
      liked: false,
      comments: []
    },
    {
      id: 26,
      type: 'reel',
      url: 'https://cdn.pixabay.com/video/2023/05/06/165387-822251388_large.mp4',
      liked: false,
      comments: []
    },
    {
      id: 27,
      type: 'post',
      url: 'https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg',
      liked: false,
      comments: ['Cool!', 'Interesting']
    },
    {
      id: 28,
      type: 'image',
      url: 'https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg',
      liked: false,
      comments: []
    },
    {
      id: 29,
      type: 'reel',
      url: 'https://cdn.pixabay.com/video/2023/03/10/159546-809395129_large.mp4',
      liked: false,
      comments: []
    },
    {
      id: 30,
      type: 'post',
      url: 'https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg',
      liked: false,
      comments: ['Lovely!', 'Beautiful']
    },
    {
      id: 31,
      type: 'image',
      url: 'https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=',
      liked: false,
      comments: []
    },
    {
      id: 32,
      type: 'reel',
      url: 'https://cdn.pixabay.com/video/2023/07/03/172273-838299084_large.mp4',
      liked: false,
      comments: []
    },
  ]
};

const exploreSlice = createSlice({
  name: 'explore',
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const item = state.exploreItems.find(i => i.id === action.payload);
      if (item) {
        item.liked = !item.liked;
      }
    },
    addComment: (state, action) => {
      const { id, comment } = action.payload;
      const item = state.exploreItems.find(i => i.id === id);
      if (item) {
        item.comments.push(comment);
      }
    }
  }
});

export const { toggleLike, addComment } = exploreSlice.actions;
export default exploreSlice.reducer;
