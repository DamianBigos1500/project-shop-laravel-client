import { productService } from '@/features/products/services/product.service';
import Head from 'next/head';
import GuestLayout from '@/layouts/GuestLayout';
import ProductImages from '@/components/detailPageComponents/ProductImages';
import CategoryChain from '@/components/detailPageComponents/CategoryChain';
import { productType } from '@/types/productType';
import DetailsSpecification from '@/components/detailPageComponents/DetailsSpecification';
import Rating from '@/components/rating/Rating';
import { productRewiewsService } from 'src/services/productReviews.service';
import { ratingsType } from '@/types/ratingsType';

type propsType = {
  product: productType;
  productRatings: ratingsType[];
};

export default function index({ product, productRatings }: propsType) {

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
          <DetailsSpecification product={product} ratings={productRatings} />
        </div>

        <div className="mt-20">
          <span>Reviews</span>

          <Rating ratings={productRatings} productId={product.id} />
        </div>
      </GuestLayout>
    </>
  );
}

export async function getServerSideProps(context: any) {
  try {
    const [productRes, productRatingsRes] = await Promise.all([
      productService.getProductById(context.params?.id!),
      productRewiewsService.getProductReviews(
        context.params?.id!,
        context.query
      ),
    ]);

    return {
      props: {
        product: productRes.data.product,
        productRatings: productRatingsRes.data.ratings,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}
