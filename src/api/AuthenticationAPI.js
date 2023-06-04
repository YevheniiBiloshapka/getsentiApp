import axios from 'axios';
import { REACT_APP_SERVER_BASE_URL } from './config';

axios.defaults.baseURL = REACT_APP_SERVER_BASE_URL;


export const emailConfirm = async body => {
  try {
    const response = await axios.post(`/api/authentication/email-confirm/`, body);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const passwordReset = async body => {
  try {
    const response = await axios.post(`/api/authentication/password-reset/`, body);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const passwordResetConfirm = async body => {
  try {
    const response = await axios.post(`/api/authentication/password-reset-confirm/`, body);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const changePassword = async body => {
  try {
    const response = await axios.post(`/api/authentication/password-change/`, body);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
