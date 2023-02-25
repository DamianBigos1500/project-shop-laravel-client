import { categoryType } from '@/types/categoryType';
import React from 'react';
import CategoryCard from './CategoryCard';

type propsType = {
  categories: categoryType[];
};

export default function CategoryGrid({ categories }: propsType) {
  return (
    <div className="mt-10 mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {categories.map((category: categoryType) => (
        <CategoryCard category={category} />
      ))}
    </div>
  );
}
