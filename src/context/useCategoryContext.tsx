import { CategoryContext } from '@/features/category/context/categoryContext';
import { useContext } from 'react';

export default function useCategoryContext() {
  return useContext(CategoryContext);
}
