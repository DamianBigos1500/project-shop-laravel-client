import { productType } from '@/types/productType';
import React from 'react';
import CartPrice from '../cartPageComponenets/CartPrice';
import { navigateToProductDetails } from '@/utils/navigateToProductDetails';
import { TfiShoppingCart } from 'react-icons/tfi';
import { FiChevronsRight } from 'react-icons/fi';
import { BsTrash } from 'react-icons/bs';
import useCartContext from '@/context/useCartContext';
import RedButton from '../UI/Button/RedButton';
import Image from 'next/image';
import { createImageUrl } from '@/utils/createImgUrl';
type propsType = {
  product: productType;
  removeFavouritItem(productId: number): void;
};

export default function FavouritProduct({
  product,
  removeFavouritItem,
}: propsType) {
  const { addItemToCart } = useCartContext();

  const deleteProduct = () => {
    removeFavouritItem(product.id);
  };

  const addToCart = () => {
    addItemToCart({ product_id: product.id });
  };

  return (
    <div className="flex justify-between sm:flex-row flex-col p-2 mt-8 border-y border-black/20">
      <div className="flex items-center">
        <div className="flex justify-center items-center pr-4">
          <BsTrash
            onClick={() => deleteProduct()}
            className="cursor-pointer text-[1.4rem] text-red-600"
          />
        </div>
        <img
          width={112}
          height={128}
          onClick={() => navigateToProductDetails(product.id)}
          src={createImageUrl(product.images[0].filename)}
          alt={product.name}
          className="w-[7rem] h-[8rem] cursor-pointer object-cover"
        />
        <span
          onClick={() => navigateToProductDetails(product.id)}
          className="text-sm cursor-pointer mx-4"
        >
          {product.name}
        </span>
      </div>

      <div className="flex justify-between p-4">
        <CartPrice
          regular_price={product.regular_price}
          discount_price={product.discount_price}
        />
        <div className="flex items-center relative ">
          <button
            onClick={() => addToCart()}
            type="button"
            className="px-4 py-2 text-green-800 hover:text-green-400 absolute flex items-center top-[-1.2rem] right-0 font-semibold text-sm rounded-md whitespace-nowrap cursor-pointer"
          >
            <div className="mr-2">Add to cart</div>
            <TfiShoppingCart />
          </button>
          <RedButton onClick={() => navigateToProductDetails(product.id)}>
            <span className="my-auto">Show Product</span>
            <FiChevronsRight className="text-2xl block" />
          </RedButton>
        </div>
      </div>
    </div>
  );
}
