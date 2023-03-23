import axios from '@/lib/axios';

export const productService = {
  getProducts: async (query: any = null) => {
    return await axios.get('http://localhost:8000/api/products', {
      params: query,
    });
  },

  createProducts: async () => {
    return await axios.post('/api/products');
  },

  getProductById: async (id: string | string[]) => {
    return await axios.get('http://localhost:8000/api/products/' + id);
  },

  getProductsByCategory: async (categorySlug: string | string[]) => {
    return await axios.get('/api/products-category/' + categorySlug);
  },

  productPaths: async () => {
    return await axios.get('/api/products-paths');
  },
};
