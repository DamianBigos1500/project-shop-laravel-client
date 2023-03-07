import React, { useEffect } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';
import useFavouritItems from '@/hooks/useFavouritItems';
import GuestLayout from '@/layouts/GuestLayout';
import Head from 'next/head';
import FavouritCollection from '@/components/favourit/FavouritCollection';

export default function favourit() {
  const { getFavouritItems, loading, favourit } = useFavouritItems();

  useEffect(() => {
    getFavouritItems();
  }, []);

  return (
    <>
      <Head>
        <title>
          Favourit - {process.env.NEXT_PUBLIC_FRONTEND_PROJECT_NAME}
        </title>
      </Head>

      <GuestLayout>
        <div className="flex justify-between">
          <div className="tracking-wide font-semibold text-2xl">Favourit:</div>
        </div>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className="">
              {favourit.map((favouritItem: any) => (
                <FavouritCollection
                  key={favouritItem.id}
                  favouritCollection={favouritItem}
                />
              ))}
            </div>
          </>
        )}
      </GuestLayout>
    </>
  );
}
