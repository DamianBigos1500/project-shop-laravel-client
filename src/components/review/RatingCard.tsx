import { ratingsType } from '@/types/ratingsType';
import React from 'react';
import RatingStars from '../rating/RatingStars';

type propsType = {
  rating: ratingsType;
};

export default function RatingCard({ rating }: propsType) {
  
  return (
    <div className="p-10 shadow-2xl rounded-md overflow-hidden">
      <div className="flex items-center ">
        <img
          className="w-16 h-16 object-cover rounded-full"
          src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        />

        <div className="px-4">
          <h3 className="text-xl text-brown-600">
            {rating.user.name} {rating.user?.surname}
          </h3>
          <p className="text-sm text-gray-400 w-full">
            {rating.status === 1
              ? 'Confirmed purchase'
              : 'Opinion not verified'}
          </p>
        </div>

        <div className="self-start pt-3">
          <RatingStars singleUser stars={rating.rating / 2} />
        </div>
      </div>

      <p className="mt-6">{rating.review}</p>
    </div>
  );
}
