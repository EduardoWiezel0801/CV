import api from './api';

export const personalInfoService = {
  getAll: async () => {
    const response = await api.get('/personal-info/');
    return response.data.results || response.data || [];
  },
  getById: async (id) => {
    const response = await api.get(`/personal-info/${id}/`);
    return response.data || {};
  },
  create: async (data) => {
    const config = data instanceof FormData ? {
      headers: { 'Content-Type': 'multipart/form-data' }
    } : {};
    const response = await api.post('/personal-info/', data, config);
    return response.data;
  },
  update: async (id, data) => {
    const config = data instanceof FormData ? {
      headers: { 'Content-Type': 'multipart/form-data' }
    } : {};
    const response = await api.put(`/personal-info/${id}/`, data, config);
    return response.data;
  },
  delete: async (id) => {
    await api.delete(`/personal-info/${id}/`);
  },
};
