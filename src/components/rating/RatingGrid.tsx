import React from 'react';
import RatingCard from '../review/RatingCard';
import { ratingsType } from '@/types/ratingsType';

type propsType = {
  ratings: ratingsType[];
  productId: number;
};

export default function RatingGrid({ ratings, productId }: propsType) {
  console.log(ratings)
  return (
    <div className="flex flex-col gap-10">
      {ratings.map((rating) => (
        <RatingCard key={rating.id} rating={rating} productId={productId} />
      ))}
    </div>
  );
}
