import { ratingsType } from '@/types/ratingsType';

type amountType = {
  amount: number;
};

export default function amountByRatings(ratings: ratingsType[]) {
  let amounts: amountType[] = Array.from({ length: 5 }, () => {
    return { amount: 0 };
  });

  ratings.forEach((rating: ratingsType) => {
    amounts[Math.floor(rating.rating / 2)].amount++;
  });

  return amounts;
}
