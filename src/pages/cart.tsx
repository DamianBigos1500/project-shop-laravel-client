import React from 'react';
import CartItemCard from '../components/UI/Card/CartItemCard';
import GuestLayout from '@/layouts/GuestLayout';
import Head from 'next/head';
import useCartContext from '@/context/useCartContext';
import { TbArrowBigLeft } from 'react-icons/tb';
import Router from 'next/router';
import { BsTrash } from 'react-icons/bs';

export default function cart({}: any) {
  const { cartItems, cartCount, removeItems } = useCartContext();
  return (
    <>
      <Head>
        <title>Cart - {process.env.NEXT_PUBLIC_FRONTEND_PROJECT_NAME}</title>
      </Head>

      <GuestLayout>
        {cartCount ? (
          <>
            <div className="tracking-wide font-semibold text-2xl mt-6">
              Your Cart: <span className="text-gray-500">({cartCount})</span>
            </div>

            <div className="flex justify-between md:flex-row flex-col gap-10 mt-4">
              <span onClick={() => removeItems()}>
                <BsTrash />
              </span>

              {/* Cart Items */}
              <div className="md:w-2/3 w-full">
                {cartItems.map((cartItem: any, index: number) => (
                  <CartItemCard key={index} cartItem={cartItem} />
                ))}
              </div>

              <div className="w-1/3 shadow-xl">asdasd</div>
            </div>
          </>
        ) : (
          <>
            <div className="mt-10 text-center text-xl font-semibold">Your Cart is Empty</div>
            <div
              className="text-green h-full flex items-center hover:text-orange-500 cursor-pointer"
              onClick={() => Router.push('/')}
            >
              <TbArrowBigLeft className="h-full flex items-center justify-center pr-2 text-[5rem] hover:" />
              Back To shopping
            </div>
          </>
        )}
      </GuestLayout>
    </>
  );
}

// export async function getStaticProps() {
//   const res = await getCartItems();
//   console.log(res);
//   return {
//     props: { cartItems: res.data.cartItems },
//     revalidate: 300,
//   };
// }
