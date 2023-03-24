import useSearch from '@/hooks/useSearch';
import { onSubmitType } from '@/types/onSubmitType';
import { navigateToProductDetails } from '@/utils/navigateToProductDetails';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';

export default function RatingOpinions() {
  const router = useRouter();

  const sortRef = useRef<any>(router.query.sort ?? '');
  const ratingRef = useRef<any>(router.query.rating ?? '');
  const confirmedRef = useRef<any>(router.query.confirmed ?? '');

  const { filterSearch } = useSearch();

  const handleSubmit = (e: onSubmitType) => {
    e.preventDefault();
    filterSearch(
      null,
      {
        sort: sortRef.current.value,
        rating: ratingRef.current.value,
        confirmed: confirmedRef.current.value,
      },
      { replace: true }
    );
  };

  const handleReset = () => {
    navigateToProductDetails(+router?.query?.id!, undefined, { scroll: false });

    sortRef.current.value = '0';
    ratingRef.current.value = '0';
    confirmedRef.current.value = '0';
  };

  return (
    <div className="w-full shadow p-5 rounded-lg bg-slate-200 mt-10">
      <div className="flex items-center justify-between m2-4">
        <p className="font-medium">Filters</p>

        <button
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
          onClick={handleReset}
        >
          Reset Filters
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          <select
            ref={sortRef}
            defaultValue={sortRef.current.value}
            className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          >
            <option value="0">Newest</option>
            <option value="2">Oldest</option>
            <option value="1">Top rated</option>
          </select>

          <select
            ref={ratingRef}
            defaultValue={ratingRef.current.value}
            className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          >
            <option value="0">-----</option>
            <option value="1">1 star</option>
            <option value="2">2 star</option>
            <option value="3">3 star</option>
            <option value="4">4 star</option>
            <option value="5">5 star</option>
          </select>

          <select
            ref={confirmedRef}
            defaultValue={confirmedRef.current.value}
            className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          >
            <option value="0">-----</option>
            <option value="1">Confirmed</option>
            <option value="2">Not confirmed</option>
          </select>
        </div>
        <button className="rounded-xl px-4 py-2 text-white bg-blue-500 mt-4">
          asdasdasd
        </button>
      </form>
    </div>
  );
}
