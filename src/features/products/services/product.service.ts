import axios from '@/lib/axios';

export const productService = {
  getProducts: async (query: object | null = null) => {
    return await axios.get('api/products', {
      params: query,
    });
  },

  createProducts: async () => {
    return await axios.post('api/products');
  },

  getProductById: async (id: string | string[]) => {
    return await axios.get('api/products/' + id);
  },

  getProductsByCategory: async (
    categorySlug: string | string[],
    query: object | null = null
  ) => {
    return await axios.get('api/products-category/' + categorySlug, {
      params: query,
    });
  },

  productPaths: async () => {
    return await axios.get('api/products-paths');
  },
};
