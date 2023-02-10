import type { NextPage } from 'next';
import Head from 'next/head';
import useAuthContext from '../context/authContext';

const Home: NextPage = () => {
  const { user } = useAuthContext();
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Shopify</title>
      </Head>

      <div>
        <p>asdasd</p>
        {user && <h1>{user.name}</h1>}
      </div>
    </div>
  );
};

export default Home;
