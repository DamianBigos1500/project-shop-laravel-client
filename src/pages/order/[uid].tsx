import OrderCard from '@/components/order/OrderCard';
import GuestLayout from '@/layouts/GuestLayout';
import { orderItemType } from '@/types/orderType';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { orderService } from 'src/services/order.service';

export default function index({ orderUid }: { orderUid: string }) {
  const [order, setOrder] = useState<any>(null);

  const getData = async () => {
    const orderRes = await orderService.showOrder(orderUid);
    setOrder(orderRes.data.order);
    console.log(orderRes.data.order);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Head>
        <title>Order - {orderUid}</title>
      </Head>
      <GuestLayout>
        <div className="mx-7xl">
          <div className="mt-10 mb-6 font-semibold text-xl">
            Order number: {orderUid}
          </div>

          {order && (
            <>
              <div className="mt-2 p-4 bg-green-400 flex justify-center">
                <span className="font-semibold mr-2">Status:</span>
                {order.status}
              </div>

              <div className="mt-2">
                <span className="font-semibold mr-2">Name:</span>
                {order.name}
              </div>

              <div className="mt-2">
                <span className="font-semibold mr-2">Surname:</span>
                {order.surname}
              </div>

              <div className="mt-2">
                <span className="font-semibold mr-2">Email:</span>
                {order.email}
              </div>

              <div className="mt-2">
                <span className="font-semibold mr-2">Street:</span>
                {order.street}
              </div>

              <div className="mt-2">
                <span className="font-semibold mr-2">Address:</span>
                {order.address}
              </div>

              <div className="mt-2">
                <span className="font-semibold mr-2">City:</span>
                {order.city}
              </div>

              <div className="mt-2">
                <span className="font-semibold mr-2">Zip_code:</span>
                {order.zip_code}
              </div>

              <div className="mt-2">
                <span className="font-semibold mr-2">Telephone:</span>
                {order.telephone}
              </div>

              <div className="mt-2">
                <span className="font-semibold mr-2">Payment Method:</span>
                {order.payment_method}
              </div>

              <div className="flex flex-col mt-10">
                <div className="font-semibold mt-2">
                  <span className="mr-2">All items in this order:</span>
                </div>
                <div className="ml-auto font-semibold">
                  Total: ${order.total_price}
                </div>
                <div className="flex flex-col gap-4">
                  {order.order_items.map((orderItem: orderItemType) => (
                    <OrderCard orderItem={orderItem} />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </GuestLayout>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  try {
    return {
      props: { orderUid: context.params?.uid },
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
