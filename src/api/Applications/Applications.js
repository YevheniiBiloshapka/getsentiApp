import axios from 'axios';
import { REACT_APP_SERVER_BASE_URL } from 'api/config';
import { buildAuthenticationHeader } from 'api/utils';

axios.defaults.baseURL = REACT_APP_SERVER_BASE_URL;

export async function fetchAppUrl(body) {
  try {
    const response = await axios.post(`/api/applications/app-url/`, body, {
      headers: {
        ...buildAuthenticationHeader(),
      },
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
}

export async function fetchApplication(params) {
  try {
    return await axios.get(`/api/applications/${params}`, {
      headers: {
        ...buildAuthenticationHeader(),
      },
    });
  } catch (error) {
    console.error(error);
    return error.response; // return error response to handle it later
  }
}

export async function fetchAnalytics(id, params) {
  try {
    return await axios.get(`/api/applications/${id}/analytics/`, {
      params: params, headers: {
        ...buildAuthenticationHeader(),
      },
    });
  } catch (error) {
    console.error(error);
    return error.response; // return error response to handle it later
  }
}


export async function fetchRecentSearches() {
  try {
    const response = await axios.get(`/api/applications/recent-searches/`, {
      headers: {
        ...buildAuthenticationHeader(),
      },
    });
    return response.data;
  } catch (error) {
    return console.error(error);
  }
}
