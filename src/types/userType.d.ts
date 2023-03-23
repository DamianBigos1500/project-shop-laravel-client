import { imageType } from './imageType.d';
export type userType = {
  id: number;
  name: string;
  surname: string;
  email: string;
  email_verified_at?: string;
  phone_number: string | null;
  profile_image: imageType;
  role: string;
  created_at: string;
  updated_at: string;
};
