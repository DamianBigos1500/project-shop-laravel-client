import axios from '@/lib/axios';

export const getProducts = async () => {
  return await axios.get('http://localhost:8000/api/products');
};

export const createProducts = async () => {
  return await axios.post('/api/products');
};

export const updateProducts = async (id: number) => {
  return await axios.patch('/api/products/');
};

export const deleteProducts = async (id: number) => {
  return await axios.delete('/api/products');
};
