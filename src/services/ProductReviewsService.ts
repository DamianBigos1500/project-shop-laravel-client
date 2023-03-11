import axios from '@/lib/axios';

export const getProductReviews = async (
  productId: string | string[],
  query: any
) => {
  return await axios.get('/api/ratings/' + productId, { params: query });
};

type postProductReviewsType = {
  productId: string | string[] | number;
  review: string;
  rating: number;
};

export const postProductReviews = async ({
  productId,
  review,
  rating,
}: postProductReviewsType) => {
  return await axios.post('/api/ratings', {
    review: review,
    rating: rating,
    product_id: productId,
  });
};
