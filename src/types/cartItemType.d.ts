import { imageType } from './imageType';

export type cartItemType = {
  id: number;
  mainImage: string;
  name: string;
  price: number;
  picture: string;
  regular_price: number;
  discount_price: number;
  priceDiscount?: number;
  quantity: number;
};

export type addToCartType = {
  product_id: number;
  quantity?: number;
};
