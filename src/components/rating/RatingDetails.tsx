import React from 'react';
import RatingStars from './RatingStars';
import { ratingsType } from '@/types/ratingsType';
import calculateRatingsStar from '@/utils/calculateRatingsStar';
import amountByRatings from '@/utils/amountByRatings';
import { FaStar } from 'react-icons/fa';

const numbers = [
  { number: 1 },
  { number: 2 },
  { number: 3 },
  { number: 4 },
  { number: 5 },
];

type propsType = {
  ratings: ratingsType[];
};

export default function RatingDetails({ ratings }: propsType) {
  const starsSum = calculateRatingsStar(ratings);
  const stars = Math.round(starsSum / ratings.length) / 2;
  const amounts = amountByRatings(ratings);

  return (
    <div className="flex flex-col md:flex-row shadow-2xl overflow-hidden">
      <div className="flex-[1] w-full flex flex-col items-center justify-center py-5 border-r border-gray-300">
        <div className="flex font-extrabold">
          <span className="text-3xl">{stars}</span>
          <span className="text-2xl text-gray-400 pl-2">/ 5</span>
        </div>
        <RatingStars stars={stars} reviews={ratings.length} />
      </div>

      <div className="p-4 flex-[2]">
        {amounts.map((item, index) => (
          <div key={index} className="flex items-center w-full">
            <div className="flex justify-center items-center w-10">
              <span className="pr-2">
                <FaStar />
              </span>
              {index + 1}
            </div>

            <div
              className={`h-2 bg-gray-300 w-full rounded-full overflow-hidden`}
            >
              <div
                className="h-full bg-yellow-400"
                style={{ width: (item.amount / ratings.length) * 100 + '%' }}
              />
            </div>

            <div className="flex justify-center items-center w-10 text-sm text-gray-600">
              ({item.amount})
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
