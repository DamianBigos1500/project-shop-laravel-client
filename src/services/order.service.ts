import axios from '@/lib/axios';

export const orderService = {
  getOrder: () => {
    return axios.get('/api/orders');
  },

  createOrder: (data: any) => {
    return axios.post('/api/orders', data);
  },

  setOrderCash: (orderID: any) => {
    return axios.post('/api/orders-cash/' + orderID);
  },

  setOrderPaypal: (orderID: any) => {
    return axios.post('/api/orders-paypal/' + orderID);
  },

  showOrder: (orderUID: string) => {
    return axios.get('/api/orders/' + orderUID);
  },
};
