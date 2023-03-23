import axios, { axiosFormData } from '@/lib/axios';

export const categoriesAdminService = {
  getCategories: async () => {
    return await axios.get('/api/admin/categories');
  },

  getCategoriesChildren: async () => {
    return await axios.get('/api/admin/categories-children');
  },

  createcategories: async (data: any) => {
    return await axiosFormData.post('/api/admin/categories', data);
  },

  showProduct: async (productId: string) => {
    return await axios.get('/api/admin/categories/' + productId);
  },

  deletecategories: async (productId: string) => {
    return await axios.delete('/api/admin/categories/' + productId);
  },
};
