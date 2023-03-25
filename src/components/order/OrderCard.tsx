import { orderItemType } from '@/types/orderType';
import { createImageUrl } from '@/utils/createImgUrl';
import Image from 'next/image';
import React from 'react';

type propsType = {
  orderItem: orderItemType;
};

export default function OrderCard({ orderItem }: propsType) {
  return (
    <>
      <div
        key={orderItem.id}
        className="flex items-center justify-between h-28 mt-10"
      >
        <div className="flex items-center">
          <div className="w-10">
            <span className="font-semibold">{orderItem.quantity} x</span>
          </div>
          <div className="w-20 h-32 overflow-hidden flex justify-center items-center">
            <Image
              height={100}
              width={80}
              className="object-cover w-20 h-28"
              src={createImageUrl(orderItem.product.images[0].filename)}
              alt={''}
            />
          </div>
          <div className="ml-10">{orderItem.product.name}</div>
        </div>
        <div>${orderItem.price}</div>
      </div>
      <div className=" border-b border-gray-300"></div>
    </>
  );
}
