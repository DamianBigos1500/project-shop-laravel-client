import Head from 'next/head';
import CardLayout from '@/components/CardLayout';
import GuestLayout from '@/layouts/GuestLayout';
import AdvertiseCarousel from '@/components/AdvertiseCarousel';

export async function getStaticProps() {
  

  return {
    props: {
      advertiseCarousel: [],
    },
    revalidate: 180,
  };
}

export default function index({ advertiseCarousel }: any) {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_FRONTEND_PROJECT_NAME}</title>
      </Head>

      <GuestLayout>
        <div className="flex lg:flex-row flex-col-reverse ">
          <div className="w-full">
            <AdvertiseCarousel advertiseCarousel={advertiseCarousel} />
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
