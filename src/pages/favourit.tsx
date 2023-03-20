import React from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';
import useFavouritItems from '@/hooks/useFavouritItems';
import GuestLayout from '@/layouts/GuestLayout';
import Head from 'next/head';
import FavouritCollection from '@/components/favouritPageComponents/FavouritCollection';
import AddNewFavouritList from '@/components/favouritPageComponents/AddNewFavouritList';
import { protectedLoginRoute } from '@/utils/protectedRoutes/protectedLoginRoute';

function favourit() {
  const {
    loading,
    error,
    favourit,
    removeFavouritCollection,
    addFavouritCollection,
    deleteFavouritItem,
  } = useFavouritItems();

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
          <AddNewFavouritList addFavouritCollection={addFavouritCollection} />
        </div>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="">
            {favourit.map((favouritItem: any) => (
              <FavouritCollection
                key={favouritItem.id}
                favouritCollection={favouritItem}
                removeFavouritCollection={removeFavouritCollection}
                removeItem={deleteFavouritItem}
              />
            ))}
          </div>
        )}

        {!loading && !error && favourit.length === 0 && (
          <div className="flex items-center mt-10 text-lg">
            <span>You don't add favourit items yet</span>
          </div>
        )}
      </GuestLayout>
    </>
  );
}
export default protectedLoginRoute(favourit);
