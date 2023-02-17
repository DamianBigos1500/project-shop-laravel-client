import type { NextPage } from 'next';
import Head from 'next/head';
import useAuthContext from '../context/authContext';
import AdvertiseCarousel from '../components/AdvertiseCarousel/AdvertiseCarousel';
import CardLayout from '../components/layout/CardLayout';

const Home: NextPage = () => {
  const { user } = useAuthContext();

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_FRONTEND_PROJECT_NAME}</title>
      </Head>

      <div className="app-container p-8">
        <div className="flex lg:flex-row flex-col-reverse ">
          <div className="w-full">
            <AdvertiseCarousel />
          </div>
        </div>

        <div className="mt-10 w-full">
          <CardLayout />
        </div>
      </div>
    </>
  );
};

export default Home;
