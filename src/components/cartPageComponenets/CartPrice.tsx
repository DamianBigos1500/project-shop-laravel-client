import React from 'react';

type propsType = {
  regular_price: number;
  discount_price: number;
};

export default function CartPrice({
  regular_price,
  discount_price,
}: propsType) {
  return (
    <div className="flex justify-center items-center flex-row  sm:flex-col text-[1.2rem] mx-auto whitespace-nowrap">
      <span
        className={`font-semibold ${
          discount_price
            ? 'line-through sm:text-[0.9rem] text-[1rem] text-gray-500 '
            : ''
        }`}
      >
        {regular_price} $
      </span>
      {discount_price && (
        <span className="font-semibold">{discount_price} $</span>
      )}
    </div>
  );
}
