import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import CartItemCard from '../components/UI/Card/CartItemCard';

export type cartItem = {
  id: number;
  mainImage: string;
  name: string;
  price: number;
  priceDiscount?: number;
  quantity: number;
};

const cartItems: cartItem[] = [
  {
    id: 1,
    mainImage:
      'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/9/pr_2020_9_21_12_9_23_990_00.jpg',
    name: 'Samsung Galaxy S20 FE 5G Fan Edition Niebieski',
    price: 129.99,
    priceDiscount: 129.99,
    quantity: 4,
  },
  {
    id: 2,
    mainImage:
      'https://strefaalergii.pl/wp-content/uploads/2021/12/ekthu2z7_pexels-tranmautritam-2194261jpg-900x500.jpg',
    name: 'Samsung Galaxy S20 FE 5G Fan Edition Niebieski',
    price: 129.99,
    quantity: 4,
  },
];

export default function cart() {
  return (
    <PageLayout className="px-10 mt-4">
      <div className="tracking-wide font-semibold text-2xl ">Your Cart <span className='text-gray-500'>(3)</span></div>

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
      <></>
    </PageLayout>
  );
}
