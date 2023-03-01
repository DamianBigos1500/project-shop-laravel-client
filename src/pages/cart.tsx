import React from 'react';
import CartItemCard from '../components/UI/Card/CartItemCard';
import GuestLayout from '@/layouts/GuestLayout';
import Head from 'next/head';
import { clearCart } from '@/features/cart/services/cartService';
import useCartContext from '@/context/useCartContext';
import { TbArrowBigLeft } from 'react-icons/tb';
import Router from 'next/router';

export default function cart({}: any) {
  const { cartItems, cartCount, removeItems } = useCartContext();
  return (
    <>
      <Head>
        <title>Cart - {process.env.NEXT_PUBLIC_FRONTEND_PROJECT_NAME}</title>
      </Head>

      <GuestLayout>
        <div className="tracking-wide font-semibold text-2xl mt-6">
          Your Cart:
          {cartCount > 0 && (
            <span className="text-gray-500">({cartCount})</span>
          )}
        </div>

        {cartCount > 0 ? (
          <div className="flex justify-between md:flex-row flex-col gap-10 mt-4">
            <span onClick={() => removeItems()}>DELETE CART</span>
            {/* Cart Items */}
            <div className="md:w-2/3 w-full">
              {cartItems.map((cartItem: any, index: number) => (
                <CartItemCard key={index} cartItem={cartItem} />
              ))}
            </div>

            <div className="w-1/3 shadow-xl">asdasd</div>
          </div>
        ) : (
          <>
            <div className="mt-10 text-center text-xl">Your Cart is Empty</div>
            <div
              className="text-green h-full flex items-center hover:text-orange-500 cursor-pointer"
              onClick={() => Router.push('/')}
            >
              <TbArrowBigLeft className="h-full flex items-center justify-center pr-2 text-[5rem]" />
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
