import React from 'react';
import RatingDetails from './RatingDetails';
import RatingOptions from './RatingOptions';
import { ratingsType } from '@/types/ratingsType';
import RatingGrid from './RatingGrid';
import useAuthContext from '@/context/useAuthContext';
import Link from 'next/link';
import NewRatingForm from './NewRatingForm';
import includeReview from '@/utils/includeReview';

type propsType = {
  ratings: ratingsType[];
  productId: number;
};

export default function Rating({ ratings, productId }: propsType) {
  const { user } = useAuthContext();
  const isReviewed = includeReview(ratings, user?.id);

  console.log(isReviewed);

  return (
    <section className="flex flex-col mt-10 ">
      <div className="rounded-xl shadow-slate-700">
        <RatingDetails ratings={ratings} />
      </div>

      {user && !isReviewed && <NewRatingForm productId={productId} />}
      {user && isReviewed && (
        <div className="mt-10 rounded-xl shadow-2xl p-6">
          You already reviewed this product
        </div>
      )}
      {!user && (
        <div className="flex items-center text-center shadow-2xl overflow-hidden rounded-xl p-6 mt-10">
          <span>You need to be log in to evaluate product</span>
          <Link
            href="/login"
            type="button"
            className="bg-green-400 ml-2 py-2 px-4 rounded-xl text-white font-semibold cursor-pointer"
          >
            Log in
          </Link>
        </div>
      )}

      <RatingOptions />

      {ratings.length > 0 && (
        <div className="mt-10">
          <RatingGrid ratings={ratings} productId={productId} />
        </div>
      )}
    </section>
  );
}
