import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: { username: '', avatarURL: '' },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setAvatarURL: (state, action) => {
      state.avatarURL = action.payload;
    }
  }
});

export const { setUsername, setAvatarURL } = profileSlice.actions;
export default profileSlice.reducer;
