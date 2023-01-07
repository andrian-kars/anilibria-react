import axios from 'axios';
import { ANILIBRIA_API_URL, NODE_API_URL, STORAGE_TOKEN, ERROR_CODE_401 } from 'src/constants';
import { checkAuthHelper } from './node/authService';

export const anilibriaApiInstance1 = (path, params = null, responseModifyCallback = null) => {
  let paramsToSend = '';

  if (params) {
    const configurePrams = (params) => {
      // Sample implementation of query string building
      let result = '';
      Object.keys(params).forEach((key) => {
        result += `${key}=${encodeURIComponent(params[key])}&`;
      });
      return result.substr(0, result.length - 1);
    };

    paramsToSend = configurePrams(params);
  }

  return fetch(`https://api.anilibria.tv/v2/${path}?` + paramsToSend)
    .then((res) => res.json())
    .then((data) => (responseModifyCallback ? responseModifyCallback(data) : data));
};

export const anilibriaApiInstance = axios.create({
  baseURL: ANILIBRIA_API_URL,
});

export const nodeApiInstance = axios.create({
  withCredentials: true,
  baseURL: NODE_API_URL,
});

nodeApiInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(STORAGE_TOKEN)}`;
  return config;
});

nodeApiInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status == ERROR_CODE_401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        await checkAuthHelper();
        return nodeApiInstance.request(originalRequest);
      } catch (error) {
        console.log('Not authorized');
      }
    }
    throw error;
  },
);
