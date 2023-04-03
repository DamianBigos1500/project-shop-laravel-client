import axios, { axiosFormData } from '@/lib/axios';

type dataTypes = {};

export const productsAdminService = {
  getProducts: async () => {
    return await axios.get('api/admin/products');
  },

  createProducts: async (data: dataTypes) => {
    return await axiosFormData.post('api/admin/products', data);
  },

  showProduct: async (productId: string) => {
    return await axios.get('api/admin/products/' + productId);
  },

  updateProducts: async (productId: number, data: dataTypes) => {
    return await axios.patch('api/admin/products/' + productId, data);
  },

  deleteProducts: async (productId: string) => {
    return await axios.delete('api/admin/products/' + productId);
  },
};
