import axios from 'axios';
import { nodeApiInstance } from '../config';
import { NODE_API_URL, STORAGE_TOKEN } from 'src/constants';

export const postRegistration = (email, password) => {
  return nodeApiInstance.post('registration', {
    email,
    password,
  });
};

export const postLogin = (email, password) => {
  return nodeApiInstance.post('login', {
    email,
    password,
  });
};

export const postLogout = () => {
  return nodeApiInstance.post('logout');
};

export const checkAuthHelper = async () => {
  const response = await axios.get(`${NODE_API_URL}refresh`, { withCredentials: true });
  const data = response.data;
  localStorage.setItem(STORAGE_TOKEN, data.accessToken);
  return data;
};
