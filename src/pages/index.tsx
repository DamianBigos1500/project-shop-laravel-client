import Head from 'next/head';
import GuestLayout from '@/layouts/GuestLayout';
import HomePageCarousel from '@/components/HomePageCarousel';
import axios from '@/lib/axios';
import { productType } from '@/types/productType';
import FeaturedProductCard from '@/components/FeaturedProductCard';

type propsType = {
  products: productType[];
};

export default function index({ products }: propsType) {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_FRONTEND_PROJECT_NAME}</title>
      </Head>

      <GuestLayout>
        <HomePageCarousel />

        <div className="mx-7xl">
          <div className="mt-10 mb-6 font-semibold text-xl">
            Featured Products:
          </div>
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {products.map((product) => (
              <FeaturedProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </GuestLayout>
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await axios.get('http://localhost:8000/api/index');

    return {
      props: { products: res.data.products },
      revalidate: 300,
    };
  } catch (error) {}
  return {
    props: { products: [] },
    revalidate: 300,
  };
}
