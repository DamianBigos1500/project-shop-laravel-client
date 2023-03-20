import axios from '@/lib/axios';

export const orderService = {
  createOrder: (data: any) => {
    return axios.post('/api/orders', data);
  },

  showOrder: (orderUID: string) => {
    return axios.get('/api/orders/' + orderUID);
  },
};
