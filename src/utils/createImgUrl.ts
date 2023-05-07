import { NO_IMAGE } from './../data/NO_IMAGE';

// const BACKEND_IMG_URL = 'https://project-shop-laravel-server-main.vercel.app/public-files';
const BACKEND_IMG_URL = 'http://localhost:8000';

export const createImageUrl = (pathname: string | null = null) => {
  if (!pathname) return NO_IMAGE;
  return BACKEND_IMG_URL + pathname;
};
