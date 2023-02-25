import Head from 'next/head';
import GuestLayout from '@/layouts/GuestLayout';
import axios from '@/lib/axios';
import { productType } from '@/types/productType';
import ProductGrid from '@/components/ProductGrid';
import { GetStaticPropsContext } from 'next';
import { getCategories } from '@/features/category/service/categoryService';
import {
  getProductsByCategory,
} from '@/features/products/services/productService';
import { useRouter } from 'next/router';

type propsType = {
  products: { data: productType[] };
};

export default function index({ products }: propsType) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          {router.query.sub_category_slug} -{' '}
          {process.env.NEXT_PUBLIC_FRONTEND_PROJECT_NAME}
        </title>
      </Head>

      <GuestLayout>
        {/* <div className="w-80">asdasd</div> */}
        <ProductGrid products={products} />
      </GuestLayout>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  let productsRes: any;

  try {
    productsRes = await getProductsByCategory(
      context.params?.sub_category_slug!
    );
  } catch (error) {}
  console.log(productsRes.data.products.data);

  return {
    props: {
      products: productsRes.data.products,
    },
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

  const paths = res.data.categories.map((category: any) => {
    return {
      params: { category_slug: category.category_slug, sub_category_slug: '' },
    };
  });

  return {
    paths: [
      // {
      //   params: {
      //     category_slug: 'computers-and-laptops',
      //     sub_category_slug: 'gaming-laptops',
      //   },
      // },
    ],

    fallback: 'blocking',
  };
}
