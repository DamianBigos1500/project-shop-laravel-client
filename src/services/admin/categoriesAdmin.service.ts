import axios, { axiosFormData } from '@/lib/axios';

type dataTypes = {};

export const categoriesAdminService = {
  getCategories: async () => {
    return await axios.get('/api/admin/categories');
  },

  getCategoriesChildren: async () => {
    return await axios.get('/api/admin/categories-children');
  },

  createcategories: async (data: dataTypes) => {
    return await axiosFormData.post('/api/admin/categories', data);
  },

  showProduct: async (productId: string) => {
    return await axios.get('/api/admin/categories/' + productId);
  },

  deletecategories: async (productId: string) => {
    return await axios.delete('/api/admin/categories/' + productId);
  },
};
