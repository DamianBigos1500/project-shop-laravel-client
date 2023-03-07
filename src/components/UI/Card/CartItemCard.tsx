import React from 'react';
import { navigateToProductDetails } from '@/utils/navigateToProductDetails';
import { BsTrash } from 'react-icons/bs';
import SelectQuantity from '@/components/cartPageComponenets/SelectQuantity';
import CartPrice from '@/components/cartPageComponenets/CartPrice';
import useCartContext from '@/context/useCartContext';
import { useSignal } from '@preact/signals-react';
import { cartItemType } from '@/types/cartItemType';

type propsType = {
  cartItem: cartItemType;
};

export default function CartItemCard({ cartItem }: propsType) {
  const { removeItemById, addItemToCart } = useCartContext();
  const quantity = useSignal<number>(cartItem.quantity);

  const handleChange = (value: number) => {
    quantity.value = value;
  };

  const changeQuantityRequest = () => {
    addItemToCart({
      product_id: cartItem.id,
      quantity: quantity.value - cartItem.quantity,
    });
  };

  const onBlur = () => {
    changeQuantityRequest();
  };
  const onSubmit = (e: HTMLFormElement) => {
    e.preventDefault();
    changeQuantityRequest();
  };

  return (
    <>
      <div className="flex justify-between sm:flex-row flex-col p-2">
        <div className=" flex items-center">
          <img
            onClick={() => navigateToProductDetails(cartItem.id)}
            src={process.env.NEXT_PUBLIC_BACKEND_IMG_URL + cartItem.picture}
            alt={cartItem.name}
            className="w-[7rem] h-[8rem] cursor-pointer object-cover"
          />
          <span
            onClick={() => navigateToProductDetails(cartItem.id)}
            className="text-sm cursor-pointer mx-4"
          >
            {cartItem.name} asdasdasdasdasdasdasd
          </span>
        </div>

        <div className="grid gap-2 sm:grid-cols-[min-content_min-content] grid-cols-[auto_min-content_min-content]  grid-rows-1 sm:grid-rows-2">
          <CartPrice
            regular_price={cartItem.regular_price}
            discount_price={cartItem.discount_price}
          />
          <div className="flex items-center sm:items-start sm:col-start-1 sm:col-end-2 col-start-1 col-end-2 row-start-1 row-end-2 sm:row-start-2 sm:row-end-3  sm:pl-0 pl-4">
            <SelectQuantity
              handleChange={handleChange}
              quantity={quantity.value}
              onBlur={onBlur}
              onSubmit={onSubmit}
            />
          </div>
          <div className="sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-3 col-start-3 col-end-4 row-start-1 row-end-2 flex items-center justify-end p-4">
            <BsTrash
              onClick={() => removeItemById(cartItem.id)}
              className="cursor-pointer text-[1.4rem] text-red-600"
            />
          </div>
        </div>
      </div>

      <div className="border-b border-black/40 mb-8" />
    </>
  );
}
