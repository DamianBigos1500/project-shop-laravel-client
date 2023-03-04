import React from 'react';
import { BsTrash } from 'react-icons/bs';

type propsType = {
  cartCount: number;
  removeItems(): void;
};

export default function CartHeader({ cartCount, removeItems }: propsType) {
  return (
    <div className="flex justify-between">
      <div className="tracking-wide font-semibold text-2xl">
        Your Cart: <span className="text-gray-500">({cartCount})</span>
      </div>

      <span
        onClick={() => removeItems()}
        className="flex items-center cursor-pointer"
      >
        <BsTrash className="pr-4 text-[2rem]" />
        <span>Reset Cart</span>
      </span>
    </div>
  );
}
