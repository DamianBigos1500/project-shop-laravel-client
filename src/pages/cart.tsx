import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import CartItemCard from '../components/UI/Card/CartItemCard';
import { cartItems } from 'src/data/cartItems';
import GuestLayout from '@/layouts/GuestLayout';
import Head from 'next/head';

export default function cart() {
  return (
    <>
      <Head>
        <title>Cart - {process.env.NEXT_PUBLIC_FRONTEND_PROJECT_NAME}</title>
      </Head>

      <GuestLayout>
        <div className="tracking-wide font-semibold text-2xl ">
          Your Cart <span className="text-gray-500">(3)</span>
        </div>

        <div className="flex justify-between md:flex-row flex-col gap-10 mt-4">
          {/* Cart Items */}
          <div className="md:w-2/3 w-full">
            {cartItems.map((cartItem, index) => (
              <CartItemCard key={index} cartItem={cartItem} />
            ))}
            asdasdasd
          </div>

          <div className="w-1/3 shadow-xl">asdasd</div>
        </div>
      </GuestLayout>
    </>
  );
}
