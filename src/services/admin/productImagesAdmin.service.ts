import axios, { axiosFormData } from '@/lib/axios';

export const productImagesAdminService = {
  getProductImages: async (productId: string | number) => {
    return await axios.get(`/api/admin/product-images/?productId=${productId}`);
  },

  addProductImage: async (data: any) => {
    return await axiosFormData.post(
      process.env.NEXT_PUBLIC_BACKEND_URL + '/api/admin/product-images',
      data
    );
  },

  removeProductImage: async (productId: string | number) => {
    return await axios.delete('/api/admin/product-images/' + productId);
  },
};
