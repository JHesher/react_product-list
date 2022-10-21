import axios from 'axios';

export async function fetchProduct(productId: string) {
  return await axios.get(`https://testbackend.nc-one.com/image?id=${productId}`);
};

export async function fetchProducts() {
  return await axios.get('https://testbackend.nc-one.com/image');
};