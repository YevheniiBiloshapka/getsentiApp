import axios from '../../utils/axios';
import { MessageBox, Notification } from 'element-react';

export async function fetchCarsGET(params) {
  try {
    const response = await axios.get(`/cars`, params);
    return response;
  } catch (error) {
    return console.log(error);
  }
}

export async function fetchCarsPost(body) {
  try {
    const response = await axios.post(`/cars`, body);

    return response.data;
  } catch (error) {
    Notification({
      title: 'Error',
      message: `${error.message}`,
      type: 'error',
      duration: 2000,
    });
    return console.log(error);
  }
}
export async function fetchCarsUpdate(id, params) {
  try {
    const response = await axios.put(`/cars/${id}`, params);
    return response.data;
  } catch (error) {
    Notification({
      title: 'Error',
      message: error,
      type: 'error',
      duration: 2000,
    });
    return console.log(`${error.message}`);
  }
}
export async function fetchCarsDelete(id) {
  try {
    const response = await axios.delete(`/cars/${id}`);
    Notification({
      title: 'Success',
      message: 'Post successfully deleted',
      type: 'success',
      duration: 2000,
    });
    return response.data;
  } catch (error) {
    Notification({
      title: 'Error',
      message: `${error.message}`,
      type: 'error',
      duration: 2000,
    });
    return console.log(error);
  }
}
export async function fetchCarsShow(id) {
  try {
    const response = await axios.get(`/cars/${id}`);
    return response.data;
  } catch (error) {
    return console.log(error);
  }
}
export async function fetchPopularCar(body) {
  try {
    const response = await axios.get(`/cars/popular`, body);
    return response.data;
  } catch (error) {
    return console.log(error);
  }
}
