import React, { useState } from 'react';
import { cartItem } from '../../../pages/cart';
import Router from 'next/router';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

type props = {
  cartItem: cartItem;
};

export default function CartItemCard({ cartItem }: props) {
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const updateQuantity = (value: number) => {
    setQuantity((prev) => prev + value);
  };

  const redirectToPage = () => {
    Router.push('/details');
  };

  return (
    <>
      <div className="flex sm:flex-row flex-col mt-6">
        <div className="flex flex-row w-full">
          <img
            onClick={redirectToPage}
            src={cartItem.mainImage}
            alt={cartItem.name}
            className=" w-[8rem] h-[8rem] text-center object-contain cursor-pointer"
          />

          <div className="px-2 w-full flex items-center justify-start">
            <span onClick={redirectToPage} className=" text-sm cursor-pointer">
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
              />
              <button className="cursor-pointer flex justify-center items-center p-2">
                <AiOutlinePlus />
              </button>
            </div>
          </div>

          <div className="whitespace-nowrap flex justify-center items-center flex-col w-20 text-center sm:text-sm text-2xl ">
            <span
              className={`font-semibold ${
                cartItem.priceDiscount
                  ? 'line-through sm:text-[0.75rem] text-xl text-gray-500'
                  : ''
              }`}
            >
              {cartItem.price} zl
            </span>
            {cartItem.priceDiscount && (
              <span className="font-semibold">{cartItem.priceDiscount} zl</span>
            )}
          </div>
        </div>
      </div>

      <div className="border-b border-black/40 mt-2" />
    </>
  );
}
