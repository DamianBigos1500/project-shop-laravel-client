import Head from 'next/head';
import GuestLayout from '@/layouts/GuestLayout';
import { productType } from '@/types/productType';
import ProductGrid from '@/components/product/ProductGrid';
import { GetStaticPropsContext } from 'next';
import { categoryService } from '@/features/category/service/category.service';
import { productService } from '@/features/products/services/product.service';
import { categoryType } from '@/types/categoryType';
import { AxiosResponse } from 'axios';

type propsType = {
  products: { data: productType[] };
  category: categoryType;
};

export default function index({ products, category }: propsType) {
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

export async function getStaticProps(context: GetStaticPropsContext) {
  let productsRes: any;

  try {
    productsRes = await productService.getProductsByCategory(
      context.params?.sub_category_slug!
    );
    return {
      props: {
        products: productsRes.data.products,
        category: productsRes.data.category,
      },
      revalidate: 600,
    };
  } catch (error) {
    return {
      props: {},
      revalidate: 600,
    };
  }
}

export async function getStaticPaths() {
  let res: AxiosResponse;

  try {
    res = await categoryService.getCategories();
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
