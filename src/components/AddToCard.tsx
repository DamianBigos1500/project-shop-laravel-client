import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

type propsType = {
  handleAddToCart(): void;
};

export default function AddToCard({ handleAddToCart }: propsType) {
  return (
    <button
      className="px-4 mb-4 text-green-500 cursor-pointer w-full"
      type="button"
      onClick={handleAddToCart}
    >
      <span className="h-[3rem] px-2 border-2 border-green-500 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white hover:border-transparent transform duration-200">
        <span>Add to cart</span>
        <FaCartPlus className="text-[1.8rem] translate-x-[-1px] pl-2" />
      </span>
    </button>
  );
}
