import { motion } from 'framer-motion';
import DropdownSidebar from './DropdownSidebar';
import { categoryType } from '@/types/categoryType';
import useCategoryContext from '@/context/useCategoryContext';
import { useRef, useState } from 'react';
import useSearch from '@/hooks/useSearch';
import { onChangeType } from '@/types/onChangeType';
import { useRouter } from 'next/router';

export default function SidebarFilter({ isOpen, category }: any) {
  const categoryRef = useRef<any>();
  const subCategoryRef = useRef<any>();
  const priceFromRef = useRef<any>();
  const priceToRef = useRef<any>();
  const { categories, findCategoryById } = useCategoryContext();
  const { filterSearch } = useSearch();
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState(
    router.query.category ?? category?.parent?.id
  );

  console.log(category?.parent?.id);

  const handleFilter = () => {
    filterSearch(
      '/details',
      {
        category: categoryRef.current.value,
        sub_category: subCategoryRef.current.value,
        price_from: priceFromRef.current.value,
        price_to: priceToRef.current.value,
        search: router.query.search,
      },
      { clearQuery: true, replace: false }
    );
  };

  return (
    <motion.div
      className="relative flex h-full flex-col overflow-y-auto bg-white py-4 pb-12 "
      variants={Sidebar_animation}
      animate={isOpen ? 'open' : 'closed'}
    >
      <div
        className={`mt-4 border-t border-gray-200 duration-200 ${
          !isOpen && 'opacity-0 w-0'
        }`}
      >
        <DropdownSidebar name={'Category'}>
          <div className="flex flex-col space-y-6 mt-2">
            <div className="flex">
              <select
                id={'category'}
                name={'category'}
                className="w-full rounded-lg bg-white border-gray-300 border px-4 py-2"
                defaultValue={router.query.category ?? category?.parent?.id}
                onChange={(e: onChangeType) =>
                  setSelectedCategory(e.target.value)
                }
                ref={categoryRef}
              >
                <option value={0}>-----</option>
                {categories.map((category: categoryType) => {
                  return (
                    <option key={category.id} value={category.id}>
                      {category.title}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </DropdownSidebar>
        <DropdownSidebar name={'Subcategory'}>
          <div className="flex flex-col space-y-6 mt-2">
            <div className="flex">
              <select
                id={'category'}
                name={'category'}
                className="w-full rounded-lg bg-white border-gray-300 border px-4 py-2"
                defaultValue={router.query.sub_category ?? category?.id}
                ref={subCategoryRef}
              >
                <option value={0}>-----</option>
                {findCategoryById(selectedCategory)?.children.map(
                  (category: categoryType) => {
                    return (
                      <option key={category.id} value={category.id}>
                        {category.title}
                      </option>
                    );
                  }
                )}
              </select>
            </div>
          </div>
        </DropdownSidebar>
        <DropdownSidebar name={'Price'}>
          <div className="flex flex-row gap-2 mt-2 p-2">
            <input
              placeholder="From"
              className="w-full rounded-lg bg-white border-gray-300 border p-2 text-md"
              type="number"
              ref={priceFromRef}
              step=".01"
            />
            <input
              placeholder="To"
              className="w-full rounded-lg bg-white border-gray-300 border p-2 text-md"
              type="number"
              ref={priceToRef}
              step=".01"
            />
          </div>
        </DropdownSidebar>

        <div className="mt-4">
          <button
            type="button"
            className="bg-green-400 rounded-lg px-4 py-2 text-white"
            onClick={handleFilter}
          >
            Use Filter
          </button>
        </div>
      </div>
    </motion.div>
  );
}

const Sidebar_animation = {
  open: {
    width: '18rem',
    transition: {
      damping: 40,
    },
  },
  closed: {
    width: 0,
    transition: {
      delay: 0.2,
      damping: 40,
    },
  },
};
