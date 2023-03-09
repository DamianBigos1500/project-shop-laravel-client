import useCategoryContext from '@/context/useCategoryContext';
import { categoryType } from '@/types/categoryType';
import Link from 'next/link';

export default function Categories() {
  const { categories } = useCategoryContext();

  return (
    <div className="font-sono category-shadow bg-gradient-to-r from-blue-200 to-blue-500">
      <ul className="max-w-[90rem] mx-auto px-6 h-[2.4rem] flex justify-between items-center ">
        {categories.map((category: categoryType) => (
          <Link key={category.id} href={'/category/' + category.category_slug}>
            <li
              key={category.id}
              className="rounded text-black hover:text-blue-800 text-center cursor-pointer whitespace-nowrap transition-colors duration-300 "
            >
              <span className="font-semibold">{category.title}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
