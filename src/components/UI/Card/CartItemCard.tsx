import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { navigateToProductDetails } from '@/utils/navigateToProductDetails';
type props = {
  cartItem: any;
};

export default function CartItemCard({ cartItem }: props) {
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const updateQuantity = (value: number) => {
    setQuantity((prev: number) => prev + value);
  };

  console.log(cartItem);

  return (
    <>
      <div className="flex sm:flex-row flex-col mt-6">
        <div className="flex flex-row w-full">
          <img
            onClick={() => navigateToProductDetails(cartItem.id)}
            src={process.env.NEXT_PUBLIC_BACKEND_IMG_URL + cartItem.picture}
            alt={cartItem.name}
            className=" w-[8rem] h-[8rem] text-center object-contain cursor-pointer"
          />

          <div className="px-2 w-full flex items-center justify-start">
            <span
              onClick={() => navigateToProductDetails(cartItem.id)}
              className=" text-sm cursor-pointer"
            >
              {cartItem.name}
            </span>
          </div>
        </div>

        <div className="flex sm:justify-between justify-between">
          <div className="sm:w-20 w-[8rem] flex justify-center items-center">
            <div className="flex items-center border border-gray-900/30 rounded-lg ">
              <button className="cursor-pointer flex justify-center items-center p-2">
                <AiOutlineMinus />
              </button>
              <input
                type="text"
                value={quantity}
                className="w-4 bg-transparent text-center justify-center"
                onChange={(e: any) => updateQuantity(e.target.value)}
              />
              <button className="cursor-pointer flex justify-center items-center p-2">
                <AiOutlinePlus />
              </button>
            </div>
          </div>

          <div className="whitespace-nowrap flex justify-center items-center flex-col w-20 text-center sm:text-sm text-2xl ">
            <span
              className={`font-semibold ${
                cartItem.discount_price
                  ? 'line-through sm:text-[0.75rem] text-xl text-gray-500'
                  : ''
              }`}
            >
              {cartItem.regular_price} zl
            </span>
            {cartItem.discount_price && (
              <span className="font-semibold">
                {cartItem.discount_price} zl
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="border-b border-black/40 mt-2" />
    </>
  );
}
