import axios, { axiosFormData } from '@/lib/axios';

type dataTypes = {};

export const productImagesAdminService = {
  getProductImages: async (productId: string | number | null) => {
    return await axios.get(`/api/admin/product-images/?productId=${productId}`);
  },

  addProductImage: async (data: dataTypes) => {
    return await axiosFormData.post('/api/admin/product-images', data);
  },

  removeProductImage: async (productId: string | number) => {
    return await axios.delete('/api/admin/product-images/' + productId);
  },
};
