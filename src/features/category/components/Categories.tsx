import useCategoryContext from '@/context/useCategoryContext';
import { categoryType } from '@/types/categoryType';
import Link from 'next/link';

export default function Categories() {
  const { categories } = useCategoryContext();

  return (
    <div className="bg-gradient-to-t from-orange-500 to-orange-200  xmd:block hidden">
      <ul className="max-w-[90rem] mx-auto px-6 h-[2.2rem] flex justify-between items-center ">
        {categories.map((category: categoryType) => (
          <Link key={category.id} href={'/category/' + category.category_slug}>
            <li
              key={category.id}
              className="py-[0.2rem] px-2 rounded-xl hover:bg-orange-200 text-center cursor-pointer whitespace-nowrap transition-colors duration-300 "
            >
              {category.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
