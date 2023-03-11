import { onSubmitType } from '@/types/onSubmitType';
import React, { useRef, useState } from 'react';
import { postProductReviews } from 'src/services/ProductReviewsService';

type propsType = {
  productId: number;
};

export default function RatingForm({ productId }: propsType) {
  const reviewRef = useRef<any>('');
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e: onSubmitType) => {
    e.preventDefault();

    try {
      await postProductReviews({
        productId: productId,
        review: reviewRef.current.value,
        rating: rating,
      });
    } catch (error) {}

    reviewRef.current.value = '';
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start w-full mt-4 "
    >
      <input
        type="number"
        value={rating}
        onChange={(e: any) => setRating(e.target.value)}
      ></input>
      <textarea
        ref={reviewRef}
        rows={4}
        className="w-full outline-none bg-transparent border-y border-black/20 resize-none p-2 text-[1rem] text-gray-500"
      ></textarea>
      <button className="bg-green-400 mt-4 py-2 px-4 rounded-xl text-white font-semibold" type="submit">
        Submit
      </button>
    </form>
  );
}
