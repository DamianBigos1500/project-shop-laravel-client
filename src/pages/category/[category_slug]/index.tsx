import CategoryGrid from '@/features/category/components/CategoryGrid';
import { categoryService } from '@/features/category/service/category.service';
import GuestLayout from '@/layouts/GuestLayout';
import { categoryType } from '@/types/categoryType';
import { AxiosResponse } from 'axios';
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
        <div className="tracking-wide font-semibold text-2xl mt-6">
          {category.title}{' '}
          <span className="text-gray-500">({category.children.length})</span>
        </div>

        <div className="">
          <CategoryGrid categories={category.children} />
        </div>
      </GuestLayout>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  let categoriesRes: AxiosResponse;

  try {
    categoriesRes = await categoryService.getCategoryBySlug(context.params?.category_slug!);
  } catch (error) {
    return {
      props: {},
      revalidate: 600,
    };
  }

  return {
    props: { category: categoriesRes.data.category },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  let res: AxiosResponse;

  try {
    res = await categoryService.getCategories();
  } catch (error) {
    return { paths: [], fallback: 'blocking' };
  }

  const paths = res.data.categories.map((category: categoryType) => {
    return { params: { category_slug: category.category_slug } };
  });

  return { paths: [], fallback: 'blocking' };
}
