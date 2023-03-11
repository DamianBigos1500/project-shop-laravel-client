import { onChangeType } from '@/types/onChangeType';
import { onSubmitType } from '@/types/onSubmitType';
import { navigateToProductDetails } from '@/utils/navigateToProductDetails';
import { Router, useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsStarFill } from 'react-icons/bs';
import { FaStar, FaStarHalf, FaStarHalfAlt } from 'react-icons/fa';
import { postProductReviews } from 'src/services/ProductReviewsService';

type propsType = {
  productId: number;
};

export default function RatingForm({ productId }: propsType) {
  const reviewRef = useRef<any>('');
  const [rating, setRating] = useState(0);
  const router = useRouter();

  const handleSubmit = async (e: onSubmitType) => {
    e.preventDefault();

    try {
      await postProductReviews({
        productId: productId,
        review: reviewRef.current.value,
        rating: rating,
      });

      navigateToProductDetails(router.query.id, undefined, { scroll: false });
    } catch (error) {}

    reviewRef.current.value = '';
  };

  const rows = [];
  for (let i = 1; i <= 10; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(
      <span key={i}>
        <input
          className="hidden"
          value={i}
          type="radio"
          onChange={(e: onChangeType) => {
            console.log(e.target.value);
            setRating(e.target.value);
          }}
          name="star"
          id={'star' + i}
        />
        <label htmlFor={'star' + i} className="h-8">
          {rating < i && <AiOutlineStar className="text-3xl" />}
          {rating == i && <AiFillStar className="text-3xl" />}
          {rating > i && <AiFillStar className="text-3xl" />}
        </label>
      </span>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start w-full mt-4 "
    >
      <div className="rating h-4  w-full flex gap-2 text-yellow-500 font-2xl">
        {rows}
      </div>

      <textarea
        ref={reviewRef}
        rows={4}
        className="w-full mt-4 outline-none bg-transparent border-y border-black/20 resize-none p-2 text-[1rem] text-gray-500"
      ></textarea>
      <button
        className="bg-green-400 mt-4 py-2 px-4 rounded-xl text-white font-semibold"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
