import replaceProductDetails from '@/utils/replaceProductDetails';
import { useState } from 'react';
import { productRewiewsService } from 'src/services/productReviews.service';

export default function useRatings() {
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);

  const createReview = async (productId: number, { review, rating }: any) => {
    setIsLoading(true);
    try {
      await productRewiewsService.postProductReviews(productId, {
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
      await productRewiewsService.patchProductReviews(ratingId, data);
      replaceProductDetails(productId);
    } catch (error) {}
    setIsLoading(false);
  };

  const deleteReview = async (ratingId: number, productId: number) => {
    try {
      await productRewiewsService.deleteProductReviews(ratingId);
      replaceProductDetails(productId);
    } catch (error) {}
  };

  return { isLoading, error, createReview, updateReview, deleteReview };
}
