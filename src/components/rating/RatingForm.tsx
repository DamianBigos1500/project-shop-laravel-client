import { onChangeType } from '@/types/onChangeType';
import { onSubmitType } from '@/types/onSubmitType';
import React, { useRef, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import AuthSubmitButton from '../UI/Button/SubmitButton';
import LoadingSpinner from '../LoadingSpinner';

type propsType = {
  onSubmit: (data: { review: string; rating: number }) => void;
  defaultValue?: string;
  buttonText: string;
  currentRating?: number;
  radioId?: number | string;
  isLoading: boolean;
};

export default function RatingForm({
  onSubmit,
  defaultValue = '',
  buttonText,
  currentRating = 0,
  radioId = 'unique',
  isLoading = false,
}: propsType) {
  const [rating, setRating] = useState(currentRating);
  const reviewRef = useRef<any>('');

  const handleSubmit = (e: onSubmitType) => {
    e.preventDefault();
    onSubmit({ review: reviewRef.current.value, rating: rating });
    reviewRef.current.value = '';
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start w-full mt-4 "
    >
      <div className="rating h-4  w-full flex gap-2 text-yellow-500 font-2xl">
        {[...Array(10)].map((_value, index) => (
          <span key={index + 1}>
            <input
              className="hidden"
              value={index + 1}
              type="radio"
              onChange={(e: onChangeType) => {
                setRating(e.target.value);
              }}
              name="star"
              id={'star' + radioId + index + 1}
            />
            <label htmlFor={'star' + radioId + index + 1} className="h-8">
              {rating < index + 1 && <AiOutlineStar className="text-3xl" />}
              {rating == index + 1 && <AiFillStar className="text-3xl" />}
              {rating > index + 1 && <AiFillStar className="text-3xl" />}
            </label>
          </span>
        ))}
      </div>

      <textarea
        ref={reviewRef}
        rows={4}
        defaultValue={defaultValue}
        className="w-full my-4 outline-none bg-transparent border-y border-black/20 resize-none p-2 text-[1rem] text-gray-500"
      ></textarea>
      <AuthSubmitButton>
        {isLoading ? <LoadingSpinner className="h-5 w-5" /> : buttonText}
      </AuthSubmitButton>
    </form>
  );
}
