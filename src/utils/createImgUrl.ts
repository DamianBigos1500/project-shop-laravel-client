import { NO_IMAGE } from './../data/NO_IMAGE';

export const createImageUrl = (pathname: string | null = null) => {
  if (!pathname) return NO_IMAGE;
  return process.env.NEXT_PUBLIC_BACKEND_IMG_URL + pathname;
};
