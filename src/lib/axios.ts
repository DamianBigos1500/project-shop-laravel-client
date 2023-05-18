import Axios from 'axios';

const baseUrl = 'https://damianbigos1500.alwaysdata.net/'
// const baseUrl = 'http://localhost:8000';

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
