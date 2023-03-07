import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import LoadingSpinner from './LoadingSpinner';

type propsType = {
  handleAddToCart(): void;
  disabled?: boolean;
};

export default function AddToCard({
  handleAddToCart,
  disabled = false,
}: propsType) {
  return (
    <button
      className="p-2 mb-4 w-full bg-gradient-to-r from-green-800 to-green-500 cursor-pointer flex justify-center items-center text-white rounded-md hover:from-green-700 hover:to-green-600 duration:200"
      type="button"
      onClick={handleAddToCart}
      disabled={disabled}
    >
      <span className="pr-2 font-semibold">Add to cart</span>
      {disabled ? (
        <LoadingSpinner className="w-6 h-6" />
      ) : (
        <FaCartPlus className="text-[1.4rem] translate-x-[-1px]" />
      )}
    </button>
  );
}
