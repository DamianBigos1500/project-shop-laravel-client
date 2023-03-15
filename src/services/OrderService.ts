import axios from '@/lib/axios';

export async function createOrder(data: any) {
  console.log(data);
  return axios.post('/api/orders', data);
}

export async function showOrder(orderUID: string) {
  return axios.get('/api/orders/' + orderUID);
}
