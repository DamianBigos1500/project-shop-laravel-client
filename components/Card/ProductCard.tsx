import React from 'react';
import styles from '../../styles/ProductCard.module.css';
import { AiFillStar } from 'react-icons/ai';

type Details = {
  Procesor: string;
  Memory: string;
  Graphic: string;
  Screen: string;
};

export type Product = {
  id: number;
  title: string;
  images: string[];
  priceDiscount: number;
  price: number;
  inStock: number;
  details: Details;
};

const product: Product = {
  id: 1,
  title: 'Samsung Galaxy S20 FE 5G Fan Edition Niebieski',
  images: ['/product-1-1.jpg', '/product-1-2.jpg'],
  priceDiscount: 129.99,
  price: 129.99,
  inStock: 13123,

  details: {
    Procesor: 'Intel core i7-11300H',
    Memory: '32GB',
    Graphic: 'NVIDIA GeForce RTX 3050 Ti + Intel Iris Xe Graphics',
    Screen: 'Matowy, LED, IPS',
  },
};

export default function ProductCard() {
  return (
    <div className="group hover:shadow-xl rounded-xl overflow-hidden text-ellipsis hover:scale-105 transition duration-300">
      {/* Images */}
      <div className="relative">
        <img src={product.images[0]} className="" />
        <img
          src={product.images[1]}
          className="absolute inset-0 group-hover:opacity-[1] opacity-0 transition"
        />
      </div>
      {/* Details */}
      <div className="flex flex-col p-4 text-ellipsis overflow-hidden">
        <div className=" ">
          <span className="text-ellipsis">{product.title}</span>
        </div>
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

        <div className="text-gray-500">
          {Object.keys(product.details).map((key, index) => (
            <div key={index} className="w-full overflow-hidden whitespace-nowrap text-ellipsis ">
              <span>{key}: </span>
              <span className="">
                {product.details[key]}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Icons */}
    </div>
  );
}
