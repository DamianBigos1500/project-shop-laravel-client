import useSearch from '@/hooks/useSearch';
import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ReactPaginate from 'react-paginate';
import { useMediaQuery } from 'react-responsive';

export default function ProductPagination({ productsData }: any) {
  const isTab = useMediaQuery({ query: '(max-width: 768px)' });
  const { filterSearch } = useSearch();

  const handleClickToPage = (event: any) => {
    filterSearch(null, { page: event.selected + 1 }, { replace: false });
  };
  if (productsData.last_page === 1) return null;

  return (
    <ReactPaginate
      breakLabel="..."
      previousLabel={
        <span className="flex justify-center items-center">
          <FiChevronLeft size={24} />
        </span>
      }
      nextLabel={
        <span className="flex justify-center items-center">
          <FiChevronRight size={24} />
        </span>
      }
      onPageChange={handleClickToPage}
      pageRangeDisplayed={isTab ? 3 : 5}
      marginPagesDisplayed={1}
      pageCount={productsData.last_page}
      // renderOnZeroPageCount={null}
      containerClassName="flex gap-1"
      breakClassName={`flex items-center justify-center`}
      previousClassName={`${WidthClassName} mr-2 rounded-full hover:bg-orange-200`}
      nextClassName={`${WidthClassName} ml-2 rounded-full hover:bg-orange-200`}
      pageLinkClassName={`${WidthClassName}`}
      pageClassName={`${WidthClassName} hover:bg-orange-200 rounded-full cursor-pointer`}
      activeLinkClassName={`${WidthClassName}  bg-orange-400 rounded-full cursor-pointer`}
    />
  );
}

const WidthClassName = 'h-10 w-10 flex items-center justify-center';
