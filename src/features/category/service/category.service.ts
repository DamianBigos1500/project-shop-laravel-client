import axios from '@/lib/axios';

export const categoryService = {
  getCategories: async () => {
    return await axios.get('/api/categories');
  },

  getCategoryBySlug: async (slug: string | string[]) => {
    return await axios.get(
      process.env.NEXT_PUBLIC_BACKEND_URL + '/api/category-slug/' + slug
    );
  },
};
