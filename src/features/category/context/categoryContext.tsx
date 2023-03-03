import { createContext, useEffect, useState } from 'react';
import { childrenType } from '@/types/childrenType';
import { categoryType } from '@/types/categoryType';
import { getCategories } from '@/features/category/service/categoryService';
import { useSignal } from '@preact/signals-react';

export const CategoryContext = createContext<any>({});

export function CategoryProvider({ children }: childrenType) {
  const categories = useSignal<categoryType[]>([]);

  async function getData() {
    const res = await getCategories();
    categories.value = res.data.categories;
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories: categories.value }}>
      {children}
    </CategoryContext.Provider>
  );
}
