import api from './api';

export const getProducts = () => api.get('/products');
export const getProductById = (id: number) => api.get(`/products/${id}`);
export const createProduct = (data: any) => api.post('/products', data);
export const updateProduct = (id: number, data: any) => api.put(`/products/${id}`, data);
export const deleteProduct = (id: number) => api.delete(`/products/${id}`);