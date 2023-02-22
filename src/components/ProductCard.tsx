import React from 'react';
import styles from '../../styles/ProductCard.module.css';
import { AiFillStar } from 'react-icons/ai';
import Router from 'next/router';

const IMAGE_URL = 'http://localhost:8000';

type Details = {
  procesor: string;
  memory: string;
  graphic: string;
  screen: string;
};

export type productType = {
  id: number;
  title: string;
  images: string[];
  discount_price?: number;
  regular_price: number;
  inStock: number;
  details: Details;
};

const product: productType = {
  id: 1,
  title: 'Samsung Galaxy S20 FE 5G Fan Edition Niebieski',
  images: ['/product-1-1.jpg', '/product-1-2.jpg'],
  // discount_price: 129.99,
  price: 129.99,
  inStock: 13123,

  details: {
    procesor: 'Intel core i7-11300H',
    memory: '32GB',
    graphic: 'NVIDIA GeForce RTX 3050 Ti + Intel Iris Xe Graphics',
    screen: 'Matowy, LED, IPS',
  },
};

export default function ProductCard({ product }: any) {
  console.log(product.images[0].filename);

  const navigateToProductPage = () => {
    // TODO
    Router.push('/details/');
  };

  return (
    <div
      onClick={navigateToProductPage}
      className="group cursor-pointer hover:shadow-xl hover:rounded-xl rounded-t-xl border-b hover:border-none border-b-black/20 overflow-hidden text-ellipsis hover:scale-105 transition duration-300"
    >
      {/* Images */}
      <div className="relative h-[20rem]">
        <img
          src={IMAGE_URL + product.images[0].filename}
          className="w-full h-full object-cover"
        />
        {product?.images[1] && (
          <img
            src={IMAGE_URL + product?.images[1].filename}
            className="w-full h-full object-cover absolute inset-0 group-hover:opacity-[1] opacity-0 transition"
          />
        )}
      </div>
      {/* Details */}
      <div className="flex flex-col p-4 text-ellipsis overflow-hidden gap-2">
        <div className="text-ellipsis">{product.title}</div>
        {/* Stars */}
        <div className="flex items-center justify-start">
          <div className="flex space-x-1 text-yellow-500">
            <AiFillStar className="text-sm" />
            <AiFillStar className="text-sm" />
            <AiFillStar className="text-sm" />
            <AiFillStar className="text-sm" />
            <AiFillStar className="text-sm" />
          </div>

          <div className="pl-2 ">
            <span className="text-gray-900/40 px-2 text-sm">(566 reviews)</span>
          </div>
        </div>

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
      {/* Icons */}
    </div>
  );
}
