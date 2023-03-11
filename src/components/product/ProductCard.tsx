import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { productType } from '@/types/productType';
import { navigateToProductDetails } from 'src/utils/navigateToProductDetails';
import useCartContext from '@/context/useCartContext';
import AddToCard from '../AddToCard';
import RatingStars from '../rating/RatingStars';

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

  return (
    <div className="flex flex-col group custom-shadow hover:border hover:rounded-xl rounded-t-xl border-b hover:border-none border-b-black/20 overflow-hidden text-ellipsis hover:scale-105 transition duration-300">
      {/* Images */}
      <div
        className="relative h-[20rem] cursor-pointer"
        onClick={() => navigateToProductDetails(product.id)}
      >
        <img
          src={
            process.env.NEXT_PUBLIC_BACKEND_IMG_URL + product.images[0].filename
          }
          className="w-full h-full object-cover"
        />
        {product?.images[1] && (
          <img
            src={
              process.env.NEXT_PUBLIC_BACKEND_IMG_URL +
              product?.images[1].filename
            }
            className="w-full h-full object-cover absolute inset-0 group-hover:opacity-[1] opacity-0 transition"
          />
        )}
      </div>
      {/* Details */}
      <div className="flex flex-col p-4 text-ellipsis overflow-hidden gap-2">
        <div
          className="cursor-pointer text-ellipsis font-semibold "
          onClick={() => navigateToProductDetails(product.id)}
        >
          {product.name.toUpperCase()}
        </div>
        {/* Stars */}
        <RatingStars stars={0} reviews={0} />

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
        <div className="text-gray-500 text-xs">
          {product.long_description}
          {/* {Object.keys(product.details).map((key: string, index: number) => (
            <div
              key={index}
              className="w-full overflow-hidden whitespace-nowrap text-ellipsis "
            >
              <span className="first-letter:uppercase">{key}: </span>
              <span className="">{product?.details[key]}</span>
            </div>
          ))} */}
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

      {/* Icons */}
    </div>
  );
}
