import { getProductById } from '@/features/products/services/productService';
import Head from 'next/head';
import GuestLayout from '@/layouts/GuestLayout';
import { GetStaticPropsContext } from 'next';
import ProductImages from '@/components/detailPageComponents/ProductImages';
import CategoryChain from '@/components/detailPageComponents/CategoryChain';
import { productType } from '@/types/productType';
import DetailsSpecification from '@/components/detailPageComponents/DetailsSpecification';
import Rating from '@/components/rating/Rating';
import { getProductReviews } from 'src/services/ProductReviewsService';
import { ratingsType } from '@/types/ratingsType';

type propsType = {
  product: productType;
  productRatings: ratingsType[];
};

export default function details({ product, productRatings }: propsType) {
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

        <div className="max-w-7xl mt-6 grid gap-y-4 gap-x-8 md:grid-cols-[12fr_13fr] md:grid-rows-[auto_1fr]">
          <ProductImages images={product.images} />

          <DetailsSpecification product={product} />
        </div>

        <div className="mt-20">
          <span>Reviews</span>

          <Rating ratings={productRatings} productId={product.id} />
        </div>
      </GuestLayout>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  try {
    const productRes = await getProductById(context.params?.id!);
    const productRatingsRes = await getProductReviews(context.params?.id!);

    return {
      props: {
        product: productRes.data.product,
        productRatings: productRatingsRes.data.ratings,
      },
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
  return {
    paths: [],
    fallback: 'blocking',
  };
}
