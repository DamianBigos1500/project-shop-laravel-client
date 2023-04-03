import Axios from 'axios';
// process.env.NEXT_PUBLIC_BACKEND_URL
const baseUrl = 'https://project-shop-laravel-server-main.vercel.app';

const option = {
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};

const axios = Axios.create({
  baseURL: baseUrl,
  ...option,
});

export const axiosFormData = Axios.create({
  baseURL: baseUrl,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
});

export default axios;
