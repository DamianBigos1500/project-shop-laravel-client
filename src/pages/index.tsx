import Head from 'next/head';
import CardLayout from '@/components/ProductCardGrid';
import GuestLayout from '@/layouts/GuestLayout';
import HomePageCarousel from '@/components/HomePageCarousel';
import axios from '@/lib/axios';
import { createCategoriesTree } from 'src/utils/createCategoriesTree';

export default function index() {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_FRONTEND_PROJECT_NAME}</title>
      </Head>

      <GuestLayout>
        <div className="mt-8 flex lg:flex-row flex-col-reverse ">
          <HomePageCarousel />
        </div>

        <div className="mt-10 xmd:flex container mx-auto">
          <div className="w-80">asdasd</div>
          <CardLayout />
        </div>
      </GuestLayout>
    </>
  );
}

export async function getStaticProps() {
  try {
    const categories = await axios.get('http://localhost:8000/api/categories');
    // console.log(categories.data.categories);
    const categoriesTree = createCategoriesTree(categories.data.categories);
    return {
      props: { categories: categoriesTree },
      revalidate: 300,
    };
  } catch (error) {}
  return {
    props: { categories: [] },
    revalidate: 300,
  };
}
