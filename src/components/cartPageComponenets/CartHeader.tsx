import React from 'react';
import { BsTrash } from 'react-icons/bs';

type propsType = {
  cartCount: number;
};

export default function CartHeader({ cartCount }: propsType) {
  return (
    <div className="flex justify-between">
      <div className="tracking-wide font-semibold text-2xl">
        Your Cart: <span className="text-gray-500">({cartCount})</span>
      </div>
    </div>
  );
}
