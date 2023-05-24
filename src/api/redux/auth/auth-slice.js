import { createSlice } from '@reduxjs/toolkit';
import { login, logout, fetchCurrentUser } from 'api/redux/auth/auth-operation';

const initialState = {
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [login.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, { payload: { token } }) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.token = token;
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
    },

    [logout.pending]: state => {
      state.isLoading = true;
    },
    [logout.fulfilled]: state => {
      state.token = null;
      state.isLoading = false;
    },
    [logout.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [fetchCurrentUser.pending]: state => {
      state.isLoading = true;
    },
    [fetchCurrentUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    [fetchCurrentUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
