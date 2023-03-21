import { createContext, useEffect, useState } from 'react';
import { childrenType } from '@/types/childrenType';
import { categoryType } from '@/types/categoryType';
import { categoryService } from '@/features/category/service/category.service';

export const CategoryContext = createContext<any>({});

export function CategoryProvider({ children }: childrenType) {
  const [categories, setCategories] = useState<categoryType[]>([]);

  async function getData() {
    const res = await categoryService.getCategories();
    setCategories(res.data.categories);
  }

  function getCategoriesChildren() {
    let subCategory: categoryType[] = [];

    categories.map((category: categoryType) =>
      category.children.map((subcat: categoryType) => subCategory.push(subcat))
    );
    return subCategory;
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <CategoryContext.Provider
      value={{ categories: categories, getCategoriesChildren }}
    >
      {children}
    </CategoryContext.Provider>
  );
}
