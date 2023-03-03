export type cartItem = {
  id: number;
  mainImage: string;
  name: string;
  price: number;
  priceDiscount?: number;
  quantity: number;
};

export type addToCartType = {
  product_id: number;
  quantity?: number;
};
