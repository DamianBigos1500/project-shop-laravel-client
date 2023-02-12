import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { BsFacebook, BsPinterest } from 'react-icons/bs';
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineInstagram,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineTwitter,
} from 'react-icons/ai';

import ProductImages from '../../components/Details/ProductImages';
import Head from 'next/head';

const name = 'Meryl Lounge Chairs';

export default function details() {
  return (
    <>
      <Head>
        <title>
          {name} - {process.env.NEXT_PUBLIC_FRONTEND_PROJECT_NAME}
        </title>
      </Head>
      <div className="app-container px-10 py-4">
        {/* Category Chain */}
        <div className="text-sm flex items-center mb-4">
          <span className="text-gray-400/40">Chair &nbsp;</span>
          <span>/ {name}</span>
        </div>

        <div className="max-w-7xl grid gap-y-4 gap-x-8 md:grid-cols-[12fr_13fr] md:grid-rows-[auto_1fr]">
          {/* Image */}
          <ProductImages />

          {/* Title */}
          <div className="row-start-1 row-end-2">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold ">{name}</h1>
              <div className="flex items-center gap-4">
                <button className="flex items-center py-[0.75rem] px-6 space-x-2 text-md font-semibold rounded-full bg-white border-2 text-red-500 border-red-500 hover:bg-red-600 hover:text-white hover:border-transparent transform duration-200">
                  <AiOutlineHeart className="text-2xl" />
                  <span className="whitespace-nowrap ls:flex hidden">
                    Wishlist
                  </span>
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center row-start-3 row-end-4">
              <div className="flex items-center justify-center">
                <div className="flex space-x-2 text-yellow-500">
                  <AiFillStar className="text-sm" />
                  <AiFillStar className="text-sm" />
                  <AiFillStar className="text-sm" />
                  <AiFillStar className="text-sm" />
                  <AiFillStar className="text-sm" />
                </div>

                <div className="pl-2 ">
                  <span className="text-gray-900/40 px-2 text-sm">
                    (566 reviews)
                  </span>
                </div>
              </div>
            </div>
            <div className="border" />
          </div>

          {/* Info */}
          <div className="md:row-start-2 md:row-end-3 row-start-3 row-end-4">
            <div className="flex justify-start items-center mt-4">
              <span className="text-4xl md:text-2xl pr-2">Price:</span>
              <div className="text-4xl md:text-2xl font-semibold">$149.99</div>
            </div>

            <p className="pt-8 leading-relaxed text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
              sodales purus, eu laoreet velit. Ut a eros lobortis, eleifend
              metus sed, blandit ipsum. Etiam ac pharetra erat. Fusce pharetra
              gravida magna.
            </p>

            <div className="flex mt-6 space-x-4 rounded-3xl">
              <div className="flex items-center border rounded-sm border-gray-900/30">
                <button className="p-4 hover:bg-slate-50">
                  <AiOutlineMinus />
                </button>

                <input
                  type="text"
                  inputMode="numeric"
                  className="w-16 h-full text-center outline-none"
                />

                <button className="p-4 hover:bg-slate-50">
                  <AiOutlinePlus />
                </button>
              </div>

              <button className="flex items-center py-[0.75rem] px-6 space-x-2 text-md font-semibold rounded-full bg-white border-2 text-green-500 border-green-500 hover:bg-green-500 hover:text-white hover:border-transparent transform duration-200">
                <MdAddShoppingCart className="text-2xl" />
                <span className="whitespace-nowrap">Add to cart</span>
              </button>
            </div>

            <div className="flex items-center space-x-6 mt-8">
              <button>
                <BsFacebook />
              </button>
              <button>
                <AiOutlineTwitter />
              </button>
              <button>
                <BsPinterest />
              </button>
              <button>
                <AiOutlineInstagram />
              </button>
            </div>
          </div>
        </div>

        <div className="my-10 mx-4">
          <ul className="flex space-x-10">
            <li>Description</li>
            <li>Specification</li>
            <li>Reviews</li>
          </ul>
        </div>
      </div>
    </>
  );
}
