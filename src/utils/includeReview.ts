import { ratingsType } from '@/types/ratingsType';

export default function includeReview(reviews: ratingsType[], userId: number) {
  for (let i = 0; i < reviews.length; i++) {
    if (reviews[i].user_id === userId) {
      return true;
    }
  }

  return false;
}
