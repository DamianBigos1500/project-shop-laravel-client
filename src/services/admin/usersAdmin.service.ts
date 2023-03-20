import axios from '@/lib/axios';

export const usersAdminService = {
  getUsers: async () => {
    return await axios.get('/api/admin/users');
  },

  createUsers: async (...data: any) => {
    return await axios.post('/api/admin/users', { ...data });
  },

  showUser: async (productId: string) => {
    return await axios.get('/api/admin/users/' + productId);
  },

  deleteUsers: async (productId: string) => {
    return await axios.delete('/api/admin/users/' + productId);
  },
};
