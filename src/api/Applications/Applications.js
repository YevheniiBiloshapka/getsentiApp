import axios from 'axios';
import { REACT_APP_SERVER_URL } from '../config';

axios.defaults.baseURL = REACT_APP_SERVER_URL;

export async function fetchAppUrl(body) {
  try {
    const response = await axios.post(`/api/applications/app-url/`, body);
    return response.data;
  } catch (error) {
    return error.response;
  }
}

export async function fetchApplication(params) {
  console.log('fetchApplication call', axios.defaults.headers.common['Authorization']);
  try {
    return await axios.get(`/api/applications/${params}`);
  } catch (error) {
    console.error(error);
    return error.response; // return error response to handle it later
  }
}

export async function fetchAnalytics(id, params) {
    console.log('fetchAnalytics call', axios.defaults.headers.common['Authorization']);

  try {
    return await axios.get(`/api/applications/${id}/analytics/`, {params: params});
  } catch (error) {
    console.error(error);
    return error.response; // return error response to handle it later
  }
}


export async function fetchRecentSearches() {
  try {
    const response = await axios.get(`/api/applications/recent-searches/`);
    return response.data;
  } catch (error) {
    return console.error(error);
  }
}
