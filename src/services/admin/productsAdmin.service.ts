import axios from '@/lib/axios';
import Axios from 'axios';

export const productsAdminService = {
  getProducts: async () => {
    return await axios.get('/api/admin/products');
  },

  createProducts: async (data: any) => {
    return await Axios.post(
      process.env.NEXT_PUBLIC_BACKEND_URL + '/api/admin/products',
      data,
      {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );
  },

  showProduct: async (productId: string) => {
    return await axios.get('/api/admin/products/' + productId);
  },

  deleteProducts: async (productId: string) => {
    return await axios.delete('/api/admin/products/' + productId);
  },
};
