import { categoryType } from './categoryType';
import { imageType } from './imageType';

export type productType = {
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
};
