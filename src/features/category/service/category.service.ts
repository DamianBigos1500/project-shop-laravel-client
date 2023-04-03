import axios from '@/lib/axios';

export const categoryService = {
  getCategories: async () => {
    return await axios.get('api/categories');
  },

  getCategoryBySlug: async (slug: string | string[]) => {
    return await axios.get('api/category-slug/' + slug);
  },
};
