import { createSlice } from '@reduxjs/toolkit';

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: {
    notifications: [],
  },
  reducers: {
    addNotification: (state, action) => {
      state.notifications.unshift(action.payload);
    },
    deleteNotification: (state, action) => {
      state.notifications = state.notifications.filter(n => n.id !== action.payload);
    },
    markAsRead: (state, action) => {
      const note = state.notifications.find(n => n.id === action.payload);
      if (note) note.read = true;
    },
    markAsUnread: (state, action) => {
      const note = state.notifications.find(n => n.id === action.payload);
      if (note) note.read = false;
    },
    clearAllNotifications: (state) => {
      state.notifications = [];
    }
  }
});


export const {
  addNotification,
  deleteNotification,
  markAsRead,
  markAsUnread,
  clearAllNotifications
} = notificationsSlice.actions;


export default notificationsSlice.reducer;

