import axios from '@/lib/axios';

export async function getCategories() {
  return await axios.get('/api/categories');
}

export async function getCategoryBySlug(slug: string | string[]) {
  return await axios.get('/api/category-slug/' + slug);
}
