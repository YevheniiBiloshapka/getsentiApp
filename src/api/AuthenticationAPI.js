import axios from 'axios';
import { REACT_APP_SERVER_URL } from './config';

const baseUrl = REACT_APP_SERVER_URL;



export const emailConfirm = async body => {
  try {
    const response = await axios.post(`${baseUrl}/api/authentication/email-confirm/`, body);
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
