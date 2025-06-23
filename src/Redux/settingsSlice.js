import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: false,
  notificationsEnabled: false,
  privateAccount: false,
  autoPlay: false,
  emailUpdates: false,
  username: '',
  email: '',
  passwordChangeError: null,
  passwordChangeSuccess: null,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
    toggleNotifications(state) {
      state.notificationsEnabled = !state.notificationsEnabled;
    },
    togglePrivateAccount(state) {
      state.privateAccount = !state.privateAccount;
    },
    toggleAutoPlay(state) {
      state.autoPlay = !state.autoPlay;
    },
    toggleEmailUpdates(state) {
      state.emailUpdates = !state.emailUpdates;
    },
    updateProfile(state, action) {
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    changePassword(state, action) {
      // For now, just clear previous errors/success.
      // You can extend this to handle password change logic or async thunk later.
      state.passwordChangeError = null;
      state.passwordChangeSuccess = true; // assume success here for demo
    },
    passwordChangeSuccess(state) {
      state.passwordChangeError = null;
      state.passwordChangeSuccess = true;
    },
    passwordChangeError(state, action) {
      state.passwordChangeError = action.payload;
      state.passwordChangeSuccess = false;
    },
  },
});

export const {
  toggleDarkMode,
  toggleNotifications,
  togglePrivateAccount,
  toggleAutoPlay,
  toggleEmailUpdates,
  updateProfile,
  changePassword,
  passwordChangeSuccess,
  passwordChangeError,
} = settingsSlice.actions;

export default settingsSlice.reducer;




