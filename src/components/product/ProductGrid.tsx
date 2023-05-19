import React, { useState } from 'react';
import ProductCard from './ProductCard';
import SidebarFilter from '../SidebarFilter';
import { AnimatePresence, motion } from 'framer-motion';
import { GrClose } from 'react-icons/gr';
import { categoryType } from '@/types/categoryType';
import { productType } from '@/types/productType';
import ProductPagination from '../ProductPagination';

type propsType = {
  products: { data: productType[] };
  category?: categoryType;
};

export default function ProductGrid({ products, category }: propsType) {
  const [isOpen, setIsOpen] = useState(true);

  if (products.data.length === 0) return <div>NotFound</div>;

  return (
    <div className={`mt-6 flex flex-col  container mx-auto`}>
      <div className="flex items-center flex-row mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className=" flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 mr-4"
        >
          <GrClose size={20} />
        </button>
        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
      </div>

      <AnimatePresence initial={false}>
        <div className="flex lg:flex-row flex-col">
          <div className="lg:mr-8 mb-8 ">
            <SidebarFilter isOpen={isOpen} category={category} />
          </div>
          <div className="flex flex-col">
            <motion.div
              className={`grid gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 ${
                isOpen && 'lg:-mt-16 delay-200'
              } duration-200 `}
            >
              {products.data.map((product: productType) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
            <div className="flex justify-center items-center mt-10">
              <ProductPagination productsData={products} />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}
