import { configureStore } from '@reduxjs/toolkit';
import homeFeedReducer from './homeFeedSlice';
import profileReducer from './profileSlice'; 
import exploreReducer from './exploreSlice';
import messagesReducer from './messagesSlice';
import notificationsReducer from './notificationsSlice';
import createPostReducer from './createPostSlice';
import settingsReducer from './settingsSlice';

export const store = configureStore({
  reducer: {
    homeFeed: homeFeedReducer,
    profile: profileReducer, 
    explore: exploreReducer,
    messages: messagesReducer,
    notifications: notificationsReducer,
    createPost: createPostReducer,
    settings: settingsReducer,
  },
});
