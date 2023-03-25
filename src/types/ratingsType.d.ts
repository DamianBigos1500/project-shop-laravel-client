import { userType } from './userType';

type ratingsType = {
  id: number;
  user: userType;
  user_id: number;
  product_id: number;
  review: text;
  rating: number;
  status: number;
};
