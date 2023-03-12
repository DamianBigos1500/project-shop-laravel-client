import Head from 'next/head';
import GuestLayout from '@/layouts/GuestLayout';
import { productType } from '@/types/productType';
import ProductGrid from '@/components/product/ProductGrid';
import { GetStaticPropsContext } from 'next';
import { getCategories } from '@/features/category/service/categoryService';
import { getProductsByCategory } from '@/features/products/services/productService';
import { useRouter } from 'next/router';
import { categoryType } from '@/types/categoryType';
import { AxiosResponse } from 'axios';

type propsType = {
  products: { data: productType[] };
  category: categoryType;
};

export default function index({ products, category }: propsType) {
  console.log(products);

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

  return {
    props: {
      products: productsRes.data.products,
      category: productsRes.data.category,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  let res: AxiosResponse;

  try {
    res = await getCategories();
  } catch (error) {
    return { paths: [], fallback: 'blocking' };
  }

  // const paths = res.data.categories.map((category: any) => {
  //   return {
  //     params: { category_slug: category.category_slug, sub_category_slug: '' },
  //   };
  // });

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
