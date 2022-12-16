import { nodeApiInstance } from '../config';

export const getUsers = () => {
  return nodeApiInstance.get('users');
};
