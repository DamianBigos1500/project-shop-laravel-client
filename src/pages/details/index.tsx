import ProductGrid from '@/components/product/ProductGrid';
import { productService } from '@/features/products/services/product.service';
import GuestLayout from '@/layouts/GuestLayout';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import React from 'react';

export default function index({ category, products }: any) {
  return (
    <>
      <Head>
        <title>
          {category.title} - {process.env.NEXT_PUBLIC_FRONTEND_PROJECT_NAME}
        </title>
      </Head>

      <GuestLayout>
        <div className="tracking-wide font-semibold text-xl mt-6">
          <span>{category.title} &nbsp;</span>
          <span className="text-gray-500">({products.data.length})</span>
        </div>

        <ProductGrid products={products} category={category} />
      </GuestLayout>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let productsRes: any;
  console.log(context.query);

  try {
    productsRes = await productService.getProducts(context?.query);
    return {
      props: {
        products: productsRes.data.products,
        category: productsRes.data.category,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}
