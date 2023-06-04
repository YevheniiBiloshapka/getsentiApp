import axios from 'axios';
import {createAsyncThunk } from '@reduxjs/toolkit';
import { REACT_APP_SERVER_BASE_URL } from '../../config';
import { buildAuthenticationHeader, token } from 'api/utils';

axios.defaults.baseURL = REACT_APP_SERVER_BASE_URL;


export const login = createAsyncThunk('auth/login', async (body, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/api/authentication/login/', body);
    token.set(data.token);

    return data;
  } catch (error) {
    console.log('login error', error);
    return rejectWithValue(error.response.data);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await axios.get('/api/authentication/logout/', {
      headers: {
        ...buildAuthenticationHeader()
      }
    });

    token.unset();
    return null;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const tokenLS = getState().auth.token;

    if (!tokenLS) {
      return rejectWithValue();
    }
    token.set(tokenLS);
  }
);
