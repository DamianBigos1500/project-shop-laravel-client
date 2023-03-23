import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

type propsType = {
  stars: number;
  reviews?: number;
  singleUser?: boolean;
};

export default function RatingStars({
  stars = 0,
  reviews = 0,
  singleUser,
}: propsType) {
  const ratingStar = Array.from({ length: 5 }, (_elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index} className="text-yellow-400">
        {stars >= index + 1 ? (
          <FaStar />
        ) : stars >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  return (
    <div className="flex items-center">
      <div className="flex gap-1">{ratingStar}</div>
      {singleUser ? (
        <div className="">
          <span className="pl-2 font-semibold">{stars}</span>
          <span className="text-gray-500">/ 5</span>
        </div>
      ) : (
        <span className="pl-4 text-sm text-gray-500 text-ellipsis whitespace-nowrap overflow-hidden">
          ({reviews} customers reviews)
        </span>
      )}
    </div>
  );
}
