import { productType } from '@/types/productType';
import React from 'react';
import { navigateToProductDetails } from 'src/utils/navigateToProductDetails';
import useCartContext from '@/context/useCartContext';
import AddToCard from './AddToCard';
import Image from 'next/image';
import { createImageUrl } from '@/utils/createImgUrl';

type propsType = {
  product: productType;
};

export default function FeaturedProductCard({ product }: propsType) {
  const { addItemToCart, addCartLoading } = useCartContext();

  return (
    <div
      key={product.id}
      className="rounded-xl overflow-hidden w-full transition custom-shadow z-0"
    >
      <Image
        src={createImageUrl(product?.images[0].filename)}
        className="w-full h-[16rem] object-cover cursor-pointer"
        onClick={() => navigateToProductDetails(product.id)}
        alt={''}
        width={1024}
        height={256}
      />
      <div className="">
        <div
          className="p-4 text-ellipsis overflow-hidden whitespace-nowrap font-semibold cursor-pointer"
          onClick={() => navigateToProductDetails(product.id)}
        >
          {product.name}
        </div>
        <div className="mx-2">
          <AddToCard
            handleAddToCart={() =>
              addItemToCart({ product_id: product.id, quantity: 1 })
            }
            disabled={product.id == addCartLoading}
          />
        </div>
      </div>
    </div>
  );
}
