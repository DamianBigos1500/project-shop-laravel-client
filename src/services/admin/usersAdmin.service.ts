import axios, { axiosFormData } from '@/lib/axios';

type dataTypes = {};

export const usersAdminService = {
  getUsers: async () => {
    return await axios.get('/api/admin/users');
  },

  createUser: async (data: dataTypes) => {
    return await axiosFormData.post('/api/admin/users', data);
  },

  showUser: async (userId: string) => {
    return await axios.get('/api/admin/users/' + userId);
  },

  updateUser: async (
    userId: number | string | string[] | null,
    data: dataTypes
  ) => {
    return await axiosFormData.post(
      `/api/admin/users/${userId}?_method=PUT`,
      data
    );
  },

  deleteUser: async (userId: string) => {
    return await axios.delete('/api/admin/users/' + userId);
  },
};
