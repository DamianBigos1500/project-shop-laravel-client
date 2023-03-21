import axios, { axiosFormData } from '@/lib/axios';

export const productsAdminService = {
  getProducts: async () => {
    return await axios.get('/api/admin/products');
  },

  createProducts: async (data: any) => {
    return await axiosFormData.post(
      process.env.NEXT_PUBLIC_BACKEND_URL + '/api/admin/products',
      data
    );
  },

  showProduct: async (productId: string) => {
    return await axios.get('/api/admin/products/' + productId);
  },

  updateProducts: async (productId: number, data: any) => {
    return await axios.patch('/api/admin/products/' + productId, data);
  },

  deleteProducts: async (productId: string) => {
    return await axios.delete('/api/admin/products/' + productId);
  },
};
