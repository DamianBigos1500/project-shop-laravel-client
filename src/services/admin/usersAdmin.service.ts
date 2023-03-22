import axios, { axiosFormData } from '@/lib/axios';

export const usersAdminService = {
  getUsers: async () => {
    return await axios.get('/api/admin/users');
  },

  createUser: async (data: any) => {
    return await axiosFormData.post('/api/admin/users', data);
  },

  showUser: async (userId: string) => {
    return await axios.get('/api/admin/users/' + userId);
  },

  updateUser: async (userId: number | string | string[] | null, data: any) => {
    return await axiosFormData.post(
      `/api/admin/users/${userId}?_method=PUT`,
      data
    );
  },

  deleteUser: async (userId: string) => {
    return await axios.delete('/api/admin/users/' + userId);
  },
};
