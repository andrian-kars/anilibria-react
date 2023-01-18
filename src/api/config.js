import axios from 'axios';
import { ANILIBRIA_API_URL, NODE_API_URL, STORAGE_TOKEN, ERROR_CODE_401 } from 'src/constants';
import { checkAuthHelper } from './node/authService';

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
