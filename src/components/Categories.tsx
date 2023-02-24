import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getCategory } from 'src/services/categoryService';
import { createCategoriesTree } from 'src/utils/createCategoriesTree';

export default function Categories() {
  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    async function getData() {
      const res = await getCategory();
      const catTree = createCategoriesTree(res.data.categories);
      setCategories(catTree);
      console.log(catTree);
    }
    getData();
  }, []);

  return (
    <div className="bg-gradient-to-r from-orange-500/80 ">
      <ul className="max-w-[90rem] mx-auto px-6  flex justify-between">
        {categories.map((category: any) => (
          <div key={category.id} className="py-2 cursor-pointer">
            <Link href={'/' + category.category_code}></Link>
            {category.title}
          </div>
        ))}
      </ul>
    </div>
  );
}
