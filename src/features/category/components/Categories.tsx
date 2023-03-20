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
            height: '2.2rem',
            opacity: 1,
            transition: { duration: 0.1, delay: 0.2 },
          }}
          exit={{ height: 0, opacity: 0, transition: { duration: 0.1 } }}
          className={`font-sono bg-gradient-to-r from-blue-200 to-blue-500 `}
        >
          <ul className="max-w-[90rem] mx-auto px-6 h-[2.4rem] flex justify-between items-center text-sm">
            {categories.map((category: categoryType) => (
              <Link
                key={category.id}
                href={'/category/' + category.category_slug}
              >
                <li
                  key={category.id}
                  className="rounded text-black hover:text-blue-800 text-center cursor-pointer whitespace-nowrap transition-colors duration-300 "
                >
                  <span className="font-semibold">{category.title}</span>
                </li>
              </Link>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
