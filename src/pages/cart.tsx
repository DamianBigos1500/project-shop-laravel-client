import React, { useEffect, useState } from 'react';
import CartItemCard from '../components/UI/Card/CartItemCard';
import GuestLayout from '@/layouts/GuestLayout';
import Head from 'next/head';
import useCartContext from '@/context/useCartContext';
import { TbArrowBigLeft } from 'react-icons/tb';
import Router from 'next/router';
import LoadingSpinner from '@/components/LoadingSpinner';
import { BsTrash } from 'react-icons/bs';
import { cartItemType } from '@/types/cartItemType';
import axios from '@/lib/axios';
import { getCookie } from 'cookies-next';
import Link from 'next/link';
import { BiLeftArrowAlt } from 'react-icons/bi';

type propsType = {
  cart: cartItemType[];
};

export default function cart() {
  const { cartItems, cartCount, removeItems, loading } = useCartContext();
  console.log(cartItems);

  const [total, setTotal] = useState<any>(null);

  useEffect(() => {
    const sumTotal = (cart: cartItemType) => {
      const sum = cartItems.reduce(
        (totalSum: number, cartItem: cartItemType) => {
          return totalSum + +cartItem.regular_price;
        },
        0
      );

      return sum;
    };

    setTotal(sumTotal);
  }, []);

  const redirectToOrder = () => {
    Router.push('/order');
  };

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
              className="text-green h-full flex items-center hover:text-green-700 cursor-pointer transition-all duration-100"
              onClick={() => Router.push('/')}
            >
              <TbArrowBigLeft className="h-full flex items-center justify-center pr-2 text-[5rem] hover:" />
              Back to shopping
            </div>
          </>
        )}

        {cartCount > 0 && (
          <>
            <div className="tracking-wide font-semibold text-2xl ">
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

                <div className="flex">
                  <Link
                    href="/"
                    className="bg-slate-500 rounded-xl hover:bg-slate-600 hover:text-white fon px-4 py-2 flex justify-center items-center transition-colors duration-100"
                  >
                    <span className="text-xl w-5 mr-4">
                      <BiLeftArrowAlt />
                    </span>
                    <span>Back for shopping</span>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/3 w-full h-full category-shadow rounded-md">
                <div className="p-4 border-gray-300 border-b flex flex-col">
                  <span className="text-2xl bold font-semibold tracking-wide">
                    Total:
                  </span>
                  <span className="mt-2">{total} $</span>
                </div>

                <div className="p-4">
                  <button
                    className="bg-slate-700 w-full text-white py-2 px-4 hover"
                    onClick={redirectToOrder}
                  >
                    Place Order
                  </button>
                </div>

                <div className="p-4">
                  <div>Coupons:</div>
                  <form>
                    <input type="text" className="w-full" />
                    <button>Use Coupon</button>
                  </form>
                </div>
              </div>
            </div>
          </>
        )}
      </GuestLayout>
    </>
  );
}

export async function getServerSideProps(context: any) {
  try {
    const cookie = getCookie('cart_items');
    console.log(cookie);

    const cartRes = await axios.get('/api/cart');

    return {
      props: {
        cart: cartRes.data,
      },
    };
  } catch (error: any) {
    console.log('error');
    return {
      props: { cart: [] },
    };
  }
}
