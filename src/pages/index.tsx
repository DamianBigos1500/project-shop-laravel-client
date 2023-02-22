import Head from 'next/head';
import CardLayout from '@/components/ProductCardGrid';
import GuestLayout from '@/layouts/GuestLayout';
import HomePageCarousel from '@/components/HomePageCarousel';
import axios from '@/lib/axios';
import { useEffect } from 'react';

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 180,
  };
}

export default function index() {


  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_FRONTEND_PROJECT_NAME}</title>
      </Head>

      <GuestLayout>
        <div className="flex lg:flex-row flex-col-reverse ">
          <div className="w-full">
            <HomePageCarousel />
          </div>
        </div>

        <div className="mt-10 xmd:flex container mx-auto">
          <div className="w-80">asdasd</div>
          <CardLayout />
        </div>
      </GuestLayout>
    </>
  );
}
