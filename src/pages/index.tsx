import Head from 'next/head';
import GuestLayout from '@/layouts/GuestLayout';
import HomePageCarousel from '@/components/HomePageCarousel';
import axios from '@/lib/axios';

export default function index({ categories }: any) {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_FRONTEND_PROJECT_NAME}</title>
      </Head>

      <GuestLayout>
        <HomePageCarousel />

        <div className="mt-10 xmd:flex container mx-auto">
          {/* <div className="w-80">asdasd</div> */}
          {/* <ProductGrid /> */}
        </div>
      </GuestLayout>
    </>
  );
}

export async function getStaticProps() {
  try {
    const categories = await axios.get('http://localhost:8000/api/categories');

    return {
      props: { categories: categories.data.categories },
      revalidate: 300,
    };
  } catch (error) {}
  return {
    props: { categories: [] },
    revalidate: 300,
  };
}
