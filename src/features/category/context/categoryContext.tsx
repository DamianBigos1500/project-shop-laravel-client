import { createContext, useEffect, useState } from 'react';
import { childrenType } from '@/types/childrenType';
import { categoryType } from '@/types/categoryType';
import { getCategories } from '@/features/category/service/categoryService';

export const CategoryContext = createContext<any>({});

export function CategoryProvider({ children }: childrenType) {
  const [categories, setCategories] = useState<categoryType[]>([]);

  useEffect(() => {
    async function getData() {
      const res = await getCategories();
      setCategories(res.data.categories);
    }
    getData();
  }, []);

  return (
    <CategoryContext.Provider value={categories}>
      {children}
    </CategoryContext.Provider>
  );
}
