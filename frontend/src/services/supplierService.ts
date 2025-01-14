import api from './api';

export const getSuppliers = () => api.get('/suppliers');
export const getSupplierById = (id: number) => api.get(`/suppliers/${id}`);
export const createSupplier = (data: any) => api.post('/suppliers', data);
export const updateSupplier = (id: number, data: any) => api.put(`/suppliers/${id}`, data);
export const deleteSupplier = (id: number) => api.delete(`/suppliers/${id}`);