import React from 'react';
import CartItemCard from '../components/UI/Card/CartItemCard';
import GuestLayout from '@/layouts/GuestLayout';
import Head from 'next/head';
import useCartContext from '@/context/useCartContext';
import { TbArrowBigLeft } from 'react-icons/tb';
import Router from 'next/router';
import LoadingSpinner from '@/components/LoadingSpinner';
import { BsTrash } from 'react-icons/bs';
import { cartItemType } from '@/types/cartItemType';

export default function cart() {
  const { cartItems, cartCount, removeItems, loading } = useCartContext();

  return (
    <>
      <Head>
        <title>Cart - {process.env.NEXT_PUBLIC_FRONTEND_PROJECT_NAME}</title>
      </Head>

      <GuestLayout>
        {loading && (
          <>
            <div className="tracking-wide font-semibold text-2xl">
              Your Cart:
            </div>
            <LoadingSpinner />
          </>
        )}

        {cartCount == 0 && !loading && (
          <>
            <div className="mt-10 text-center text-xl font-semibold">
              Your Cart is Empty
            </div>
            <div
              className="text-green h-full flex items-center hover:text-green-700 cursor-pointer"
              onClick={() => Router.push('/')}
            >
              <TbArrowBigLeft className="h-full flex items-center justify-center pr-2 text-[5rem] hover:" />
              Back To shopping
            </div>
          </>
        )}

        {cartCount > 0 && (
          <>
            <div className="tracking-wide font-semibold text-2xl">
              Your Cart: <span className="text-gray-500">({cartCount})</span>
            </div>

            <span
              onClick={() => removeItems()}
              className="flex items-center cursor-pointer mt-4 text-red-600"
            >
              <BsTrash className="pr-4 text-[2rem]" />
              <span>Reset Cart</span>
            </span>

            <div className="flex justify-between xmd:flex-row flex-col gap-10 mt-4">
              {/* Cart Items */}
              <div className="xmd:w-2/3 w-full">
                {cartItems.map((cartItem: cartItemType) => (
                  <CartItemCard key={cartItem.id} cartItem={cartItem} />
                ))}
              </div>

              <div className="w-1/3 shadow-xl">Checkout</div>
            </div>
          </>
        )}
      </GuestLayout>
    </>
  );
}
