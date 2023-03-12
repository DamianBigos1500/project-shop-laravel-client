import React from 'react';
import RatingStars from './RatingStars';
import { ratingsType } from '@/types/ratingsType';
import calculateRatingsStar from '@/utils/calculateRatingsStar';
import amountByRatings from '@/utils/amountByRatings';
import { FaStar } from 'react-icons/fa';
import useSearch from '@/hooks/useSearch';

type propsType = {
  ratings: ratingsType[];
};

export default function RatingDetails({ ratings = [] }: propsType) {
  const ratingsLength = ratings.length == 0 ? 1 : ratings.length;
  const starsSum = calculateRatingsStar(ratings);
  const stars = starsSum == 0 ? 0 : Math.round(starsSum / ratingsLength) / 2;
  const amounts = amountByRatings(ratings);

  const { filterSearch } = useSearch();

  return (
    <div className="flex flex-col md:flex-row shadow-2xl overflow-hidden">
      <div className="flex-[1] w-full flex flex-col items-center justify-center py-5 border-r border-gray-300">
        <div className="flex font-extrabold">
          <span className="text-3xl">{stars}</span>
          <span className="text-2xl text-gray-400 pl-2">/ 5</span>
        </div>
        <RatingStars stars={stars} reviews={ratingsLength} />
      </div>

      <div className="p-4 flex-[2]">
        {amounts.map((item, index) => (
          <div
            key={index}
            className="flex items-center w-full cursor-pointer"
            onClick={() => filterSearch({ rating: index + 1 })}
          >
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
                style={{ width: (item.amount / ratingsLength) * 100 + '%' }}
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
