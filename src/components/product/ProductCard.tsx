import React from 'react';
import { productType } from '@/types/productType';
import { navigateToProductDetails } from 'src/utils/navigateToProductDetails';
import useCartContext from '@/context/useCartContext';
import AddToCard from '../AddToCard';
import RatingStars from '../rating/RatingStars';
import calculateRatingsStar from '@/utils/calculateRatingsStar';
import Image from 'next/image';
import { createImageUrl } from '@/utils/createImgUrl';

type Details = {
  procesor: string;
  memory: string;
  graphic: string;
  screen: string;
};

type propsType = {
  product: productType;
};

export default function ProductCard({ product }: propsType) {
  const { addItemToCart, addCartLoading } = useCartContext();

  const ratingsLength =
    (product.ratings?.length == 0 ? 1 : product.ratings?.length) ?? 0;
  const starsSum = calculateRatingsStar(product.ratings);
  const stars = starsSum == 0 ? 0 : Math.round(starsSum / ratingsLength) / 2;

  return (
    <div className="flex flex-col bg-white group custom-shadow hover:border hover:rounded-xl rounded-t-xl border-b hover:border-none border-b-black/20 overflow-hidden  hover:scale-105  duration-300">
      {/* Images */}
      <div
        className="relative h-[24rem] cursor-pointer overflow-hidden"
        onClick={() => navigateToProductDetails(product.id)}
      >
        <Image
          width={384}
          height={384}
          src={createImageUrl(product.images[0].filename)}
          className="w-full h-full object-cover"
          alt={''}
        />
        {product?.images[1] && (
          <Image
            width={384}
            height={384}
            src={createImageUrl(product?.images[1].filename)}
            className="w-full h-full object-cover absolute inset-0 group-hover:opacity-[1] opacity-0 transition"
            alt={''}
          />
        )}
      </div>
      {/* Details */}
      <div className="flex flex-col justify-between h-[20rem]">
        <div className="flex flex-col p-4  overflow-hidden gap-2">
          <div
            className="cursor-pointer text-ellipsis whitespace-nowrap overflow-hidden font-semibold "
            onClick={() => navigateToProductDetails(product.id)}
          >
            {product.name.toUpperCase()}
          </div>
          {/* Stars */}
          <RatingStars stars={stars} reviews={product.ratings?.length} />

          {/* Price */}
          <div className="flex items-center gap-4">
            <span
              className={` font-semibold text-xl ${
                product.discount_price
                  ? 'line-through sm:text-[1rem] text-gray-500'
                  : 'font-semibold'
              }`}
            >
              {product.regular_price} zl
            </span>
            {product.discount_price && (
              <span className="font-semibold sm:text-xl text-2xl">
                {product.discount_price} zl
              </span>
            )}
          </div>

          {/* DescriptionShort */}
          <div className="text-gray-500 text-xs text-ellipsis overflow-hidden">
            {product.short_description}
          </div>
        </div>

        <div className="mx-4">
          <AddToCard
            handleAddToCart={() =>
              addItemToCart({ product_id: product.id, quantity: 1 })
            }
            disabled={product.id === addCartLoading}
          />
        </div>
      </div>

      {/* Icons */}
    </div>
  );
}
