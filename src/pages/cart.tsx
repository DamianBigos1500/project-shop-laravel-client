import React from 'react';
import CartItemCard from '../components/UI/Card/CartItemCard';
import GuestLayout from '@/layouts/GuestLayout';
import Head from 'next/head';
import { clearCart } from '@/features/cart/services/cartService';
import useCartContext from '@/context/useCartContext';

export default function cart({}: any) {
  const { cartItems } = useCartContext();

  return (
    <>
      <Head>
        <title>Cart - {process.env.NEXT_PUBLIC_FRONTEND_PROJECT_NAME}</title>
      </Head>

      <GuestLayout>
        <div className="tracking-wide font-semibold text-2xl mt-6">
          Your Cart <span className="text-gray-500">(3)</span>
        </div>
        <span onClick={() => clearCart()}>DELETE CART</span>

        <div className="flex justify-between md:flex-row flex-col gap-10 mt-4">
          {/* Cart Items */}
          <div className="md:w-2/3 w-full">
            {cartItems.value.map((cartItem: any, index: number) => (
              <CartItemCard key={index} cartItem={cartItem} />
            ))}
          </div>

          <div className="w-1/3 shadow-xl">asdasd</div>
        </div>
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
