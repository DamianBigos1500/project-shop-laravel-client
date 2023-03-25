import { productType } from './productType';

export type orderType = {
  id: number;
  order_code: string;
  name: string;
  surname: string;
  email: string;
  telephone: string;
  street: string;
  address: string;
  city: string;
  total_price: string;
  zip_code: string;
  payment_method: string;
  status: string;
  created_at: string;
};

export type orderItemType = {
  id: number;
  quantity: number;
  product_id: number;
  product: productType;
  price: number;
};
