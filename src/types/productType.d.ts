import { categoryType } from './categoryType';
import { imageType } from './imageType';

export type productType = {
  product_code: string | number | undefined;
  id: number;
  name: string;
  images: imageType[];
  short_description: string;
  long_description: string;
  discount_price?: number;
  regular_price: number;
  inStock: number;
  details: Details;
  category?: categoryType;
  ratings?: any;
};
