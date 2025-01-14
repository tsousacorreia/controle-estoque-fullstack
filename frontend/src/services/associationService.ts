import api from './api';

export const getAssociations = () => api.get('/associations');
export const associateProductSupplier = (productId: number, supplierId: number) => api.post('/associations', { productId, supplierId });
export const removeAssociation = (productId: number, supplierId: number) => api.delete(`/associations/${productId}/${supplierId}`);