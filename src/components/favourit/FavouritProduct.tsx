import { productType } from '@/types/productType';
import React from 'react';
import CartPrice from '../cartPageComponenets/CartPrice';
import { navigateToProductDetails } from '@/utils/navigateToProductDetails';
import { TfiShoppingCart } from 'react-icons/tfi';
import { FiChevronsRight } from 'react-icons/fi';
import { BsTrash } from 'react-icons/bs';
import useCartContext from '@/context/useCartContext';
type propsType = {
  product: productType;
  deleteFavouritProduct(e: number): void;
};

export default function FavouritProduct({
  product,
  deleteFavouritProduct,
}: propsType) {
  const { addItemToCart } = useCartContext();

  const deleteProduct = () => {
    deleteFavouritProduct(product.id);
  };

  const addToCart = () => {
    addItemToCart({ product_id: product.id, quantity: 1 });
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
          onClick={() => navigateToProductDetails(product.id)}
          src={
            process.env.NEXT_PUBLIC_BACKEND_IMG_URL + product.images[0].filename
          }
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
        <div className="flex items-center relative text-green-800">
          <div className="px-4 py-2 absolute flex items-center top-[-1.2rem] right-0 font-semibold text-sm rounded-md whitespace-nowrap cursor-pointer">
            <button className="mr-2" onClick={() => addToCart()}>
              Add to cart
            </button>
            <TfiShoppingCart />
          </div>
          <button
            onClick={() => navigateToProductDetails(product.id)}
            className="bg-gradient-to-r from-red-500 to-red-900 text-white rounded-md px-4 py-2 ml-4 flex items-center hover:from-red-900 hover:to-red-900 transition-all duration-200"
          >
            <span className="my-auto">Show Product</span>
            <FiChevronsRight className="text-2xl block" />
          </button>
        </div>
      </div>
    </div>
  );
}
