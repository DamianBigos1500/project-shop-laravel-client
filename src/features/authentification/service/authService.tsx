import axios from '@/lib/axios';
import { loginDataType, registerDataType } from '../types';

export const postRegister = async (data: registerDataType) => {
  return await axios.post('/register', data);
};

export const postLogin = async (data: loginDataType) => {
  return await axios.post('/login', data);
};

export const postLogout = async () => {
  return await axios.post('/logout');
};

export const getUserData = async () => {
  return await axios.get('/api/user');
};
