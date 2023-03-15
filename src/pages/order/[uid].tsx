import GuestLayout from '@/layouts/GuestLayout';
import Head from 'next/head';
import React from 'react';
import { showOrder } from 'src/services/OrderService';

export default function index({ order }: any) {
  return (
    <>
      <Head>
        <title>Order - {order.order_code}</title>
      </Head>
      <GuestLayout>
        <div className="mx-7xl">
          <div className="mt-10 mb-6 font-semibold text-xl">
            Order number: {order.uid}
          </div>
          <div className="flex md:flex-row flex-col">
            <div className="flex-1 bg-red-200">form data</div>
            <div className="w-40 bg-red-400">payment method</div>
          </div>
        </div>
      </GuestLayout>
    </>
  );
}

export async function getStaticProps(context: any) {
  try {
    const res = await showOrder(context.params.uid);

    console.log(res.data);

    return {
      props: { order: res.data.order },
      revalidate: 300,
    };
  } catch (error) {}
  return {
    props: { products: [] },
    revalidate: 300,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
