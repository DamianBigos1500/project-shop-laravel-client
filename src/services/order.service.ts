import axios from '@/lib/axios';

type dataType = {};

export const orderService = {
  getOrder: () => {
    return axios.get('api/orders');
  },

  createOrder: (data: dataType) => {
    return axios.post('api/orders', data);
  },

  setOrderCash: (orderID: number) => {
    return axios.post('api/orders-cash/' + orderID);
  },

  setOrderPaypal: (orderID: number) => {
    return axios.post('api/orders-paypal/' + orderID);
  },

  showOrder: (orderUID: string) => {
    return axios.get('api/orders/' + orderUID);
  },
};
