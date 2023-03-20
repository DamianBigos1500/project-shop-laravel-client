import { productType } from '@/types/productType';
import { navigateToProductDetails } from '@/utils/navigateToProductDetails';
import React from 'react';

type propsType = {
  product: productType;
};

export default function SearchProductCard({ product }: propsType) {
  return (
    <div
      key={product.id}
      className="rounded-md p-2 h-20 flex justify-between transition-colors  hover:bg-slate-200 cursor-pointer"
      onClick={() => navigateToProductDetails(product.id)}
    >
      <div className="flex">
        <div className=" h-full w-20">
          <img
            src={
              process.env.NEXT_PUBLIC_BACKEND_IMG_URL +
              product.images[0].filename
            }
            className="h-full max-w-[5rem] object-cover mx-auto"
          />
        </div>
        <div className="pl-2">{product.name}</div>
      </div>
      <div className="pl-2 font-semibold">${product.regular_price}</div>
    </div>
  );
}
