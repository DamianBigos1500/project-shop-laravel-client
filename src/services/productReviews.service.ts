import axios from '@/lib/axios';

export type postProductReviewsType = {
  review: string;
  rating: number;
};

export const productRewiewsService = {
  getProductReviews: async (productId: string | string[], query: object) => {
    return await axios.get('api/ratings/' + productId, { params: query });
  },

  postProductReviews: async (
    productId: number,
    { review, rating }: postProductReviewsType
  ) => {
    if (rating < 1 || rating > 10 || review.trim() == '') return;

    return await axios.post('api/ratings', {
      review: review,
      rating: rating,
      product_id: productId,
    });
  },

  patchProductReviews: async (
    ratingId: number,
    { review, rating }: postProductReviewsType
  ) => {
    if (rating < 1 || rating > 10 || review.trim() == '') return;

    return await axios.patch('api/ratings/' + ratingId, {
      review: review,
      rating: rating,
    });
  },

  deleteProductReviews: async (ratingId: number) => {
    return await axios.delete('api/ratings/' + ratingId);
  },
};
