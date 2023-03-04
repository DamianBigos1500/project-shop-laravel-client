import { productType } from '@/types/productType';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

type propsType = {
  id: number;
  name: string;
};

export default function ProductTitleComponent({ name, id }: propsType) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold ">{name}</h1>
      <div className="flex items-center gap-4">
        <button className="flex items-center py-[0.75rem] px-6 space-x-2 text-md font-semibold rounded-full bg-white border-2 text-red-500 border-red-500 hover:bg-red-600 hover:text-white hover:border-transparent transform duration-200">
          <AiOutlineHeart className="text-2xl" />
          <span className="whitespace-nowrap ls:flex hidden">Wishlist</span>
        </button>
      </div>
    </div>
  );
}
