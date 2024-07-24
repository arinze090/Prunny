// features/user/userSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  user: null,
  token: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
    signOutUser: (state, action) => {
      state.user = null;
    },
  },
});

export const {getUser, signOutUser, registerUser} = userSlice.actions;
export default userSlice.reducer;
