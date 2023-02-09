import type { NextPage } from 'next';
import Head from 'next/head';
import useAuth from '../hooks/useAuth';

const Home: NextPage = () => {
  const { user, logout } = useAuth();

  console.log(user)
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <p>asdasd</p>
        {user && <h1>{user.name}</h1>}
      </div>
    </div>
  );
};

export default Home;
