import { productType } from '@/types/productType';
import React from 'react';
import { navigateToProductDetails } from 'src/utils/navigateToProductDetails';
import { FaCartPlus } from 'react-icons/fa';
import useCartContext from '@/context/useCartContext';
import LoadingSpinner from './LoadingSpinner';

type propsType = {
  product: productType;
};

export default function FeaturedProductCard({ product }: propsType) {
  const { addItemToCart, addCartLoading } = useCartContext();

  return (
    <div
      key={product.id}
      className="rounded-xl overflow-hidden  w-full transition custom-shadow z-0"
    >
      <img
        src={
          process.env.NEXT_PUBLIC_BACKEND_IMG_URL + product?.images[0].filename
        }
        className="w-full h-[16rem] object-cover cursor-pointer"
        onClick={() => navigateToProductDetails(product.id)}
      />
      <div className="">
        <div
          className="p-4 text-ellipsis overflow-hidden whitespace-nowrap font-semibold cursor-pointer"
          onClick={() => navigateToProductDetails(product.id)}
        >
          {product.name}
        </div>
        <button
          className="px-4 mb-4 text-green-500 cursor-pointer w-full"
          type="button"
          onClick={() => addItemToCart({ product_id: product.id, quantity: 1 })}
        >
          <span className="h-[3rem] px-2 border-2 border-green-500 rounded-full flex items-center justify-center">
            <span className="pr-2">Add to cart</span>

            <FaCartPlus className="text-[1.8rem] translate-x-[-1px]" />
          </span>
        </button>
      </div>
    </div>
  );
}
