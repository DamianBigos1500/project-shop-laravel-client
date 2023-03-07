import useCategoryContext from '@/context/useCategoryContext';
import { categoryType } from '@/types/categoryType';
import Link from 'next/link';

export default function Categories() {
  const { categories } = useCategoryContext();

  return (
    <div className="font-sono category-shadow">
      <ul className="max-w-[90rem] mx-auto px-6 h-[2.2rem] flex justify-between items-center ">
        {categories.map((category: categoryType) => (
          <Link key={category.id} href={'/category/' + category.category_slug}>
            <li
              key={category.id}
              className="rounded hover:text-green-800 text-center cursor-pointer whitespace-nowrap transition-colors duration-300 "
            >
              <span className="font-semibold text-black">
                {category.title}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
