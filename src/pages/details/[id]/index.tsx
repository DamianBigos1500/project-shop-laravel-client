import React, { useState } from 'react';
import { BsFacebook, BsPinterest } from 'react-icons/bs';
import {
  productPaths,
  getProductById,
} from '@/features/products/services/productService';

import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';

import Head from 'next/head';
import GuestLayout from '@/layouts/GuestLayout';
import { GetStaticPropsContext } from 'next';
import ProductImages from '@/components/detailPageComponents/ProductImages';
import CategoryChain from '@/components/detailPageComponents/CategoryChain';
import useCartContext from '@/context/useCartContext';
import ProductTitleComponent from '@/components/detailPageComponents/ProductTitleComponent';
import ProductReview from '@/components/detailPageComponents/ProductReview';
import { productType } from '@/types/productType';
import SelectQuantity from '@/components/cartPageComponenets/SelectQuantity';
import AddToCard from '@/components/AddToCard';

type propsType = {
  product: productType;
};

export default function details({ product }: propsType) {
  const [quantity, setQuantity] = useState<number>(1);

  const { addItemToCart, addCartLoading } = useCartContext();

  const handleChange = (quantity: number) => {
    setQuantity(quantity);
  };

  const handleAddToCart = () => {
    // const quantity = set();
    addItemToCart({ product_id: product.id, quantity: quantity });
  };

  return (
    <>
      <Head>
        <title>
          {product.name} - {process.env.NEXT_PUBLIC_FRONTEND_PROJECT_NAME}
        </title>
      </Head>
      <GuestLayout>
        {/* Category Chain */}
        <CategoryChain product={product} />

        {/* Top */}
        <div className="max-w-7xl mt-6 grid gap-y-4 gap-x-8 md:grid-cols-[12fr_13fr] md:grid-rows-[auto_1fr]">
          {/* Image */}
          <ProductImages images={product.images} />

          {/* Title */}
          <div className="row-start-1 row-end-2">
            <ProductTitleComponent name={product.name} productId={product.id} />
            <ProductReview />
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
              <SelectQuantity
                handleChange={handleChange}
                quantity={quantity}
                onSubmit={() => {}}
                onBlur={() => {}}
              />
              <AddToCard
                handleAddToCart={handleAddToCart}
                disabled={product.id == addCartLoading}
              />
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
