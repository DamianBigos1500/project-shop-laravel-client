import { ratingsType } from '@/types/ratingsType';
import amountByRatings from './amountByRatings';
import calculateRatingsStar from './calculateRatingsStar';

function ratingsData(ratings: ratingsType[]) {
  const ratingsLength = ratings.length == 0 ? 1 : ratings.length;
  const starsSum = calculateRatingsStar(ratings);
  const stars = starsSum == 0 ? 0 : Math.round(starsSum / ratingsLength) / 2;
  const amounts = amountByRatings(ratings);

  return { ratingsLength, starsSum, stars, amounts };
}

export default ratingsData;
