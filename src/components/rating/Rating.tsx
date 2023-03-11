import React from 'react';
import RatingDetails from './RatingDetails';
import RatingOptions from './RatingOptions';
import { ratingsType } from '@/types/ratingsType';
import RatingGrid from './RatingGrid';
import RatingForm from './RatingForm';
import useAuthContext from '@/context/useAuthContext';

type propsType = {
  ratings: ratingsType[];
  productId: number;
};

export default function Rating({ ratings, productId }: propsType) {
  const { user } = useAuthContext();

  return (
    <section className="flex flex-col mt-10 ">
      <div className="rounded-xl shadow-slate-700">
        <RatingDetails ratings={ratings} />
      </div>

      {user ? (
        <div className="flex flex-col items-start text-center shadow-2xl overflow-hidden rounded-xl p-6 mt-10">
          <span className="font-semibold text-xl">
            Here you can evaluate this product
          </span>
          <RatingForm productId={productId} />
        </div>
      ) : (
        <div className="">You need to be log in to evaluate product</div>
      )}

      <RatingOptions />

      {ratings.length > 0 && (
        <div className="mt-10">
          <RatingGrid ratings={ratings} />
        </div>
      )}
    </section>
  );
}
