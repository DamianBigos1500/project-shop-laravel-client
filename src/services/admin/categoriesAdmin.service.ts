import axios from '@/lib/axios';
import Axios from 'axios';

export const categoriesAdminService = {
  getCategories: async () => {
    return await axios.get('/api/admin/categories');
  },

  getCategoriesChildren: async () => {
    return await axios.get('/api/admin/categories-children');
  },

  createcategories: async (data: any) => {
    return await Axios.post(
      process.env.NEXT_PUBLIC_BACKEND_URL + '/api/admin/categories',
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
    return await axios.get('/api/admin/categories/' + productId);
  },

  deletecategories: async (productId: string) => {
    return await axios.delete('/api/admin/categories/' + productId);
  },
};
