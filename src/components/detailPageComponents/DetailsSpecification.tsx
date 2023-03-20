import React, { useState } from 'react';
import ProductTitleComponent from './ProductTitleComponent';
import SelectQuantity from '../cartPageComponenets/SelectQuantity';
import AddToCard from '../AddToCard';
import DetailsIcons from './DetailsIcons';
import { productType } from '@/types/productType';
import useCartContext from '@/context/useCartContext';
import RatingStars from '../rating/RatingStars';
import { ratingsType } from '@/types/ratingsType';
import amountByRatings from '@/utils/amountByRatings';
import calculateRatingsStar from '@/utils/calculateRatingsStar';
import ratingsData from '@/utils/ratingsData';

type propsType = {
  product: productType;
  ratings: ratingsType[];
};

export default function DetailsSpecification({ product, ratings }: propsType) {
  const [quantity, setQuantity] = useState<number>(1);
  const { addItemToCart, addCartLoading } = useCartContext();
  const { stars } = ratingsData(ratings);

  const handleChange = (quantity: number) => {
    setQuantity(quantity);
  };

  const handleAddToCart = () => {
    addItemToCart({ product_id: product.id, quantity: quantity });
  };

  return (
    <div>
      {/* Title */}
      <div className="row-start-1 row-end-2">
        <ProductTitleComponent name={product.name} productId={product.id} />
        <RatingStars stars={stars} reviews={ratings.length} />
        <div className="border" />
      </div>
      {/* Info */}
      <div className="md:row-start-2 md:row-end-3 row-start-3 row-end-4">
        <div className="flex justify-start items-center mt-4">
          <span className="text-4xl md:text-2xl pr-2">Price:</span>
          <div className="text-4xl md:text-2xl font-semibold">
            {product.regular_price} $
          </div>
        </div>

        <p className="pt-8 leading-relaxed text-sm">
          {product.short_description}
        </p>

        <div className="flex mt-6 space-x-4 rounded-3xl">
          <SelectQuantity
            handleChange={handleChange}
            quantity={quantity}
            onSubmit={() => {}}
            onBlur={() => {}}
          />

          <AddToCard
            handleAddToCart={handleAddToCart}
            disabled={product.id == addCartLoading}
          />
        </div>

        <DetailsIcons />

        <p className="pt-8 leading-relaxed text-sm">
          {product.long_description}
        </p>
      </div>
    </div>
  );
}
