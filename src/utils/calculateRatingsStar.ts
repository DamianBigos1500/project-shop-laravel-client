import { ratingsType } from '@/types/ratingsType';

export default function calculateRatingsStar(ratings: ratingsType[]) {
  const stars = ratings.reduce((totalSum, rating: ratingsType) => {
    return totalSum + rating.rating;
  }, 0);

  return stars ?? 0;
}
