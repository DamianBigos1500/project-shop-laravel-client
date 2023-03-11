import React from 'react';
import RatingCard from '../review/RatingCard';
import { ratingsType } from '@/types/ratingsType';

type propsType = {
  ratings: ratingsType[];
};

export default function RatingGrid({ ratings }: propsType) {
  return (
    <div className="flex flex-col gap-10">
      {ratings.map((rating) => (
        <RatingCard key={rating.id} rating={rating} />
      ))}
    </div>
  );
}
