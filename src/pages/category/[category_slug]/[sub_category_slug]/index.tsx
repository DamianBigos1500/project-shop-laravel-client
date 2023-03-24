import Head from 'next/head';
import GuestLayout from '@/layouts/GuestLayout';
import { productType } from '@/types/productType';
import ProductGrid from '@/components/product/ProductGrid';
import { GetServerSidePropsContext } from 'next';
import { productService } from '@/features/products/services/product.service';
import { categoryType } from '@/types/categoryType';

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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let productsRes: any;

  try {
    productsRes = await productService.getProductsByCategory(
      context?.params?.sub_category_slug!,
      context.query
    );
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
