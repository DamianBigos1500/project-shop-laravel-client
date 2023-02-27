import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { BsFacebook, BsPinterest } from 'react-icons/bs';
import {
  productPaths,
  getProductById,
} from '@/features/products/services/productService';

import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineInstagram,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineTwitter,
} from 'react-icons/ai';

import Head from 'next/head';
import GuestLayout from '@/layouts/GuestLayout';
import { GetStaticPropsContext } from 'next';
import ProductImages from '@/components/ProductImages';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function details({ product }: any) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          {product.name} - {process.env.NEXT_PUBLIC_FRONTEND_PROJECT_NAME}
        </title>
      </Head>
      <GuestLayout>
        {/* Category Chain */}
        <div className="text-sm flex items-center mt-6">
          <Link href={`/category/${router.query.category_slug}`}>
            <span className="text-gray-400 cursor-pointer">
              {router.query.category_slug} &nbsp;
            </span>
          </Link>
          <span> / &nbsp;</span>
          <Link
            href={`/category/${router.query.category_slug}/${router.query.sub_category_slug}`}
          >
            <span className="text-gray-400 cursor-pointer">
              {router.query.sub_category_slug} &nbsp;
            </span>
          </Link>
          <span> / &nbsp;</span>
          <span>{product.name}</span>
        </div>

        {/* Top */}
        <div className=" mt-4">
          <div className="max-w-7xl grid gap-y-4 gap-x-8 md:grid-cols-[12fr_13fr] md:grid-rows-[auto_1fr]">
            {/* Image */}
            <ProductImages images={product.images} />

            {/* Title */}
            <div className="row-start-1 row-end-2">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold ">{product.name}</h1>
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
                <div className="text-4xl md:text-2xl font-semibold">
                  {product.regular_price} $
                </div>
              </div>

              <p className="pt-8 leading-relaxed text-sm">
                {product.short_description}
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

              <p className="pt-8 leading-relaxed text-sm">
                {product.long_description}
              </p>
            </div>
          </div>
        </div>
        {/* Bottom */}

        <div className="my-10">
          <ul className="flex space-x-10">
            <li>Description</li>
            <li>Specification</li>
            <li>Reviews</li>
          </ul>
        </div>
      </GuestLayout>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  try {
    const product = await getProductById(context.params?.id!);
    return {
      props: { product: product.data.product },
      revalidate: 180,
    };
  } catch (error) {
    return {
      props: {},
      revalidate: 180,
    };
  }
}

export async function getStaticPaths() {
  const paths: any = await productPaths();

  return {
    // paths: paths.data.productsPaths,
    paths: [],
    fallback: 'blocking',
  };
}
