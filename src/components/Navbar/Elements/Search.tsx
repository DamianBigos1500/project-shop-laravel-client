import LoadingSpinner from '@/components/LoadingSpinner';
import SearchProductCard from '@/components/SearchProductCard';
import useSearch from '@/hooks/useSearch';
import axios from '@/lib/axios';
import { onChangeType } from '@/types/onChangeType';
import { productType } from '@/types/productType';
import throttle from '@/utils/throttle';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import SearchProductComponents from './SearchProductComponents';

export default function Search() {
  const { filterSearch } = useSearch();

  const [searchInput, setSearchInput] = useState<string>('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="md:row-start-1 md:row-end-2 row-start-2 row-end-3 md:col-start-2 md:col-end-3 col-start-1 col-end-3 md:px-12 px-4 flex items-center justify-center">
      <div className="md:max-w-[28rem] w-full">
        <div className="relative flex items-center justify-center w-full">
          <input
            type="search"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e: onChangeType) => setSearchInput(e.target.value)}
            className="relative rounded-full border border-grey-900 flex-auto min-w-0 focus:outline-none block w-full px-4 py-2 text-[0.8rem] font-normal bg-gray-100  border-gray-300 m-0"
            placeholder="Search for items..."
          />
          <button
            type="submit"
            className=" h-full absolute rounded-full px-4 py-2 text-base right-[-2px] bottom-0 bg-gray-200 hover:bg-gray-300 focus: focus:outline-none font-medium"
          >
            <AiOutlineSearch />
          </button>

          <AnimatePresence initial={false}>
            <motion.div
              animate={
                isFocused && searchInput
                  ? {
                      height: 'fit-content',
                    }
                  : {
                      height: 0,
                    }
              }
              className={`overflow-hidden top-[100%]  absolute bg-white w-full md:w-[150%] max-h-[30rem] overflow-y-auto rounded-xl shadow-sidebar`}
            >
              <SearchProductComponents
                isFocused={isFocused}
                searchInput={searchInput}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
