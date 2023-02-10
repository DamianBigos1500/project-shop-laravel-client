import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Search() {
  return (
    <div className="items-center justify-center sm:w-[24rem] w-full flex order-2 sm:order-none sm:px-0 px-4">
      <div className="relative flex items-center justify-center w-full">
        <input
          type="search"
          className="relative rounded-full border border-grey-900 flex-auto min-w-0 focus:outline-none block w-full px-4 py-2 text-[0.8rem] font-normal bg-gray-100  border-gray-300 m-0"
          placeholder="Search for items..."
        />
        <button
          type="submit"
          className=" h-full absolute rounded-full px-4 py-2 text-base right-[-2px] bottom-0 bg-gray-200 hover:bg-gray-300 focus: focus:outline-none font-medium"
        >
          <AiOutlineSearch />
        </button>
      </div>
    </div>
  );
}
