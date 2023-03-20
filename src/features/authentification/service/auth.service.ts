import axios from '@/lib/axios';
import { loginDataType, registerDataType } from '../types';

export const AuthService = {
  register: async (data: registerDataType) => {
    return await axios.post('/register', data);
  },

  login: async (data: loginDataType) => {
    return await axios.post('/login', data);
  },

  logout: async () => {
    return await axios.post('/logout');
  },

  getUser: async () => {
    return await axios.get('/api/user');
  },
};
