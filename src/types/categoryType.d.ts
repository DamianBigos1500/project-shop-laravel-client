import { imageType } from './imageType';

export type categoryType = {
  id: number;
  title: string;
  category_slug: string;
  parent_id: number;
  children: categoryType[];
  category_image?: imageType;
  parent?: categoryType;
};
