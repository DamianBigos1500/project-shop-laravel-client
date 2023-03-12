import replaceProductDetails from '@/utils/replaceProductDetails';
import { useState } from 'react';
import {
  deleteProductReviews,
  patchProductReviews,
  postProductReviews,
} from 'src/services/ProductReviewsService';

export default function useRatings() {
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);

  const createReview = async (productId: number, { review, rating }: any) => {
    setIsLoading(true);
    try {
      await postProductReviews(productId, {
        review,
        rating,
      });
      replaceProductDetails(productId);
    } catch (error) {}
    setIsLoading(false);
  };

  const updateReview = async (
    ratingId: number,
    productId: number,
    { ...data }: any
  ) => {
    setIsLoading(true);
    try {
      await patchProductReviews(ratingId, data);
      replaceProductDetails(productId);
    } catch (error) {}
    setIsLoading(false);
  };

  const deleteReview = async (ratingId: number, productId: number) => {
    try {
      await deleteProductReviews(ratingId);
      replaceProductDetails(productId);
    } catch (error) {}
  };

  return { isLoading, error, createReview, updateReview, deleteReview };
}
