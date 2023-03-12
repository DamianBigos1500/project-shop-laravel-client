import React from 'react';
import RatingForm from './RatingForm';
import useRatings from '@/hooks/useRatings';

export default function NewRatingForm({ productId }: any) {
  const { isLoading, createReview } = useRatings();

  const handleCreate = ({ review, rating }: any) => {
    createReview(productId, { review, rating });
  };

  return (
    <div className="flex flex-col items-start text-center shadow-2xl overflow-hidden rounded-xl p-6 mt-10">
      <span className="font-semibold text-xl">
        Here you can evaluate this product
      </span>
      <RatingForm
        isLoading={isLoading}
        onSubmit={handleCreate}
        buttonText={'Submit'}
      />
    </div>
  );
}
