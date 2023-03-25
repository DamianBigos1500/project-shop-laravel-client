import { userType } from './userType.d';
import { imageType } from './imageType';
import { productType } from './productType';

export type favouritCollectionType = {
  id: number;
  name: string;
  user_id: number;
  user?: userType;
  products: productType[];
};

export type collectionType = {
  id: number;
  name: string;
  user_id: number;
  user?: userType;
  products: productType[];
};
