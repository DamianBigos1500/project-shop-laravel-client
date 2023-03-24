import useCategoryContext from '@/context/useCategoryContext';
import useScrollPosition from '@/hooks/useScrollPosition';
import { categoryType } from '@/types/categoryType';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

export default function Categories() {
  const { categories } = useCategoryContext();
  const scrollPosition = useScrollPosition(100);
  const isScrollPositive = scrollPosition > 10;

  return (
    <AnimatePresence initial={false}>
      {!isScrollPositive && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: '2.4rem',
            opacity: 1,
            transition: { duration: 0.1, delay: 0.2 },
          }}
          exit={{ height: 0, opacity: 0, transition: { duration: 0.1 } }}
          className={`font-sono bg-gradient-to-r from-blue-200 to-blue-200 `}
        >
          <ul className="max-w-[90rem] mx-auto px-6 h-[2.4rem] flex justify-between items-center text-sm">
            {categories.map((category: categoryType, index: number) => (
              <div
                className="group relative w-full h-full flex items-center justify-center"
                key={category.id}
              >
                <Link href={'/category/' + category.category_slug}>
                  <li
                    key={category.id}
                    className="rounded text-black hover:text-blue-800 text-center cursor-pointer whitespace-nowrap duration-300 "
                  >
                    <span className="font-semibold">{category.title}</span>
                  </li>
                </Link>
                <div
                  className={`category-shadow absolute group-hover:opacity-[1] opacity-0 group-hover:h-fit group-hover:block w-80 h-0 bg-blue-100 rounded-b-md top-9 duration-200 overflow-hidden ${
                    categories.length / 2 > index
                      ? 'group-hover:left-0 left-20'
                      : 'group-hover:right-0 right-20'
                  }`}
                >
                  {category.children.map((subCategory) => (
                    <div
                      key={subCategory.id}
                      className="p-4 hover:text-blue-800 duration-300 hover:bg-blue-400 font-semibold"
                    >
                      <Link
                        className="w-full h-full"
                        href={`/category/${category.category_slug}/${subCategory.category_slug}`}
                      >
                        <div>{subCategory.title}</div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
