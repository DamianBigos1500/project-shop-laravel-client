import axios from '@/lib/axios';

export const getProductReviews = async (
  productId: string | string[],
  query: any
) => {
  return await axios.get('/api/ratings/' + productId, { params: query });
};

type postProductReviewsType = {
  review: string;
  rating: number;
};

export const postProductReviews = async (
  productId: number,
  { review, rating }: postProductReviewsType
) => {
  if (rating < 1 || rating > 10 || review.trim() == '') return;

  return await axios.post('/api/ratings', {
    review: review,
    rating: rating,
    product_id: productId,
  });
};

export const patchProductReviews = async (
  ratingId: number,
  { review, rating }: postProductReviewsType
) => {
  if (rating < 1 || rating > 10 || review.trim() == '') return;

  return await axios.patch('/api/ratings/' + ratingId, {
    review: review,
    rating: rating,
  });
};

export const deleteProductReviews = async (ratingId: number) => {
  return await axios.delete('/api/ratings/' + ratingId);
};
