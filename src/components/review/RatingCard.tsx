import { ratingsType } from '@/types/ratingsType';
import React, { useState } from 'react';
import RatingStars from '../rating/RatingStars';
import useAuthContext from '@/context/useAuthContext';
import { BsTrash } from 'react-icons/bs';
import { GiCancel } from 'react-icons/gi';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import RatingForm from '../rating/RatingForm';
import useRatings from '@/hooks/useRatings';
import Image from 'next/image';

type propsType = {
  rating: ratingsType;
  productId: number;
};

export default function RatingCard({ rating, productId }: propsType) {
  const { user } = useAuthContext();
  const [isEditing, setIsEditing] = useState(false);
  const { isLoading, updateReview, deleteReview } = useRatings();

  const handleEditReview = async ({ ...data }: any) => {
    updateReview(rating.id, productId, data);
    setIsEditing(false);
  };

  const handleDeleteReview = async () => {
    deleteReview(rating.id, productId);
  };

  return (
    <div className="p-10 shadow-2xl rounded-md overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="flex">
          <Image
            className="w-16 h-16 object-cover rounded-full"
            src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt={''}
            width={64}
            height={64}
          />

          <div className="px-8">
            <h3 className="text-xl text-brown-600">
              {rating.user.name} {rating.user?.surname}
            </h3>
            <p className="text-sm text-gray-400 w-full">
              {rating.status === 1
                ? 'Confirmed purchase'
                : 'Opinion not verified'}
            </p>
          </div>

          <div className="self-start pt-2">
            <RatingStars singleUser stars={rating.rating / 2} />
          </div>
        </div>

        {rating.user?.email === user?.email && (
          <div className="text-white">
            <button
              className="px-4 py-2 bg-gradient-to-r text-2xl from-blue-500 to-blue-900 rounded-full mr-2"
              onClick={() => setIsEditing((prev) => !prev)}
            >
              {isEditing ? <GiCancel /> : <MdOutlineModeEditOutline />}
            </button>
            <button
              className="px-4 py-2 bg-gradient-to-r text-2xl from-red-500 to-red-900 rounded-full"
              onClick={handleDeleteReview}
            >
              <BsTrash />
            </button>
          </div>
        )}
      </div>

      {isEditing ? (
        <div>
          <RatingForm
            onSubmit={handleEditReview}
            buttonText={'Edit'}
            defaultValue={rating.review}
            currentRating={rating.rating}
            radioId={rating.id}
            isLoading={isLoading}
          />
        </div>
      ) : (
        <p className="mt-6">{rating.review}</p>
      )}
    </div>
  );
}
