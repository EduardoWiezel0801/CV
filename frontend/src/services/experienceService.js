import api from './api';

export const experienceService = {
  getAll: async () => {
    const response = await api.get('/experiences/');
    return response.data.results || response.data || [];
  },

  getById: async (id) => {
    const response = await api.get(`/experiences/${id}/`);
    return response.data;
  },

  create: async (data) => {
    const response = await api.post('/experiences/', data);
    return response.data;
  },

  update: async (id, data) => {
    const response = await api.put(`/experiences/${id}/`, data);
    return response.data;
  },

  delete: async (id) => {
    await api.delete(`/experiences/${id}/`);
  },
};