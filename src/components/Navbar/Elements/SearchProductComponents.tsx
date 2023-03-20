import LoadingSpinner from '@/components/LoadingSpinner';
import SearchProductCard from '@/components/SearchProductCard';
import axios from '@/lib/axios';
import { productType } from '@/types/productType';
import React, { useEffect, useState } from 'react';

type propsType = {
  isFocused: boolean;
  searchInput: string;
};

export default function SearchProductComponents({
  isFocused,
  searchInput,
}: propsType) {
  const [productsData, setProductsData] = useState<any>({
    products: [],
    productsCount: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isFocused && searchInput.trim() != '') {
      setIsLoading(true);

      const delayDebounceFn = setTimeout(async () => {
        const productsRes = await axios.get(
          `api/products-search?search=${searchInput}`
        );
        setProductsData(productsRes.data);

        setIsLoading(false);
      }, 200);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [searchInput]);

  return (
    <>
      {!isLoading && productsData?.productsCount > 0 && (
        <div className="relative p-2 flex flex-col">
          <div className="text-sm text-gray-400 py-2">
            We total find ({productsData.productsCount}) products for your
            search
            <span className='text-blue-300 hover:text-blue-500 duration-150 cursor-pointer'> Show all</span>
          </div>

          <div className="flex flex-col gap-2">
            {productsData?.products &&
              productsData.products.map((product: productType) => (
                <SearchProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      )}

      {isLoading && (
        <div className="py-6">
          <LoadingSpinner className="text-blue-500 h-10 w-10" />
        </div>
      )}

      {!isLoading &&
        searchInput.trim() !== '' &&
        productsData?.productsCount === 0 && (
          <div className="px-2 py-6 text-gray-400 text-sm">
            We don't have product you search for
          </div>
        )}
    </>
  );
}
