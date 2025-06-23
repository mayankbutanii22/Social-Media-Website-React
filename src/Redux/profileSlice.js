import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  fullName: '',
  address: '',
  phone: '',
  email: '',
  password: '',
  profilePic: '1000015783[1].jpg',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;


