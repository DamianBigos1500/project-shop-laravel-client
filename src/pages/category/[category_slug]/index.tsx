import CategoryGrid from '@/features/category/components/CategoryGrid';
import {
  getCategories,
  getCategoryBySlug,
} from '@/features/category/service/categoryService';
import { getProducts } from '@/features/products/services/productService';
import GuestLayout from '@/layouts/GuestLayout';
import axios from '@/lib/axios';
import { categoryType } from '@/types/categoryType';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import React from 'react';

type propsType = {
  category: categoryType;
};

export default function index({ category }: propsType) {
  return (
    <>
      <Head>
        <title>
          {category.title} - {process.env.NEXT_PUBLIC_FRONTEND_PROJECT_NAME}
        </title>
      </Head>

      <GuestLayout>
        <div>
          <div className="tracking-wide font-semibold text-2xl mt-6">
            {category.title}{' '}
            <span className="text-gray-500">({category.children.length})</span>
          </div>

          <div className="">
            <CategoryGrid categories={category.children} />
          </div>
        </div>
      </GuestLayout>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  let categoriesRes: any;

  try {
    categoriesRes = await getCategoryBySlug(
      context.params?.category_slug!
    );
  } catch (error) {
    return {
      props: {},
      revalidate: 600,
    };
  }

  console.log(categoriesRes);
  return {
    props: { category: categoriesRes.data.category },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  let res: any;

  try {
    res = await getCategories();
  } catch (error) {
    return { paths: [], fallback: 'blocking' };
  }

  const paths = res.data.categories.map((cat: any) => {
    return { params: { category_slug: cat.category_slug } };
  });

  return { paths: [], fallback: 'blocking' };
}
