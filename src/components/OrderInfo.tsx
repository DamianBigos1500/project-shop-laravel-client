import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { orderService } from 'src/services/order.service';

export default function OrderInfo({ user }: any) {
  const [orders, setOrders] = useState<any>([]);

  async function getData() {
    const dataRes = await orderService.getOrder();
    setOrders(dataRes.data.order);
  }
  console.log(orders);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col space-y-8">
      <div>
        <h3 className="text-2xl font-semibold">Basic Information</h3>
        <hr />
      </div>

      <div className="flex flex-col space-y-4">
        {orders.map((order: any) => {
          return (
            <div key={order.id}>
              <div className="hover:bg-gray-200 rounded-md p-2">
                <div>
                  <span className="mr-2 border font-semibold">Order number:</span>
                  <Link href={`/order/${order.order_code}`}>
                    {order.order_code}
                  </Link>
                </div>
                <div>
                  <span className="mr-2 border font-semibold">Order Place Date:</span>
                  {order.created_at}
                </div>
              </div>
              <div className="border-1 border-black" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
