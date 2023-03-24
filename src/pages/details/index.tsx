import ProductGrid from '@/components/product/ProductGrid';
import { productService } from '@/features/products/services/product.service';
import GuestLayout from '@/layouts/GuestLayout';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import React from 'react';

export default function index({ products, productsCount }: any) {
  return (
    <>
      <Head>
        <title>Search - {process.env.NEXT_PUBLIC_FRONTEND_PROJECT_NAME}</title>
      </Head>

      <GuestLayout>
        <div className="tracking-wide font-semibold text-xl mt-6">
          <span className="text-gray-500">
            Total product found ({productsCount ?? 0})
          </span>
        </div>

        <ProductGrid products={products} />
      </GuestLayout>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let productsRes: any;

  try {
    productsRes = await productService.getProducts(context.query);

    return {
      props: {
        products: productsRes.data.products,
        productsCount: productsRes.data.productsCount,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}
