import axios from 'axios';
import { REACT_APP_SERVER_URL } from '../config';
axios.defaults.baseURL = REACT_APP_SERVER_URL;

export async function fetchAppUrl(body) {
  try {
    const response = await axios.post(`/api/applications/app-url/`, body);
    return response.data;
  } catch (error) {
    return console.log(error);
  }
}

export async function fetchApplications(params) {
  try {
    const response = await axios.get(`/api/applications/${params}`);
    return response.data;
  } catch (error) {
    return console.log(error);
  }
}
export async function fetchAnalytics(id, params) {
  try {
    const response = await axios.get(`/api/applications/${id}/analytics/`, params);
    return response.data;
  } catch (error) {
    return console.log(error);
  }
}
export async function fetchRecentSearches() {
  try {
    const response = await axios.get(`/api/applications/recent-searches/`);
    return response.data;
  } catch (error) {
    return console.log(error);
  }
}
