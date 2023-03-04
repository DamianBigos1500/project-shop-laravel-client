import React from 'react';

export default function CartPrice({ regular_price, discount_price }: any) {
  return (
    <div className="flex justify-center items-center flex-row  sm:flex-col text-[1.2rem] mx-auto whitespace-nowrap">
      <span
        className={`font-semibold ${
          discount_price
            ? 'line-through sm:text-[0.9rem] text-[1rem] text-gray-500 '
            : ''
        }`}
      >
        {regular_price} zl
      </span>
      {discount_price && (
        <span className="font-semibold">{discount_price} zl</span>
      )}
    </div>
  );
}
