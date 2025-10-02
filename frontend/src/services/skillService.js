import api from './api';

export const skillService = {
  getAll: async () => {
    const response = await api.get('/skills/');
    return response.data.results;
  },

  getByCategory: async () => {
    const response = await api.get('/skills/by_category/');
    return response.data;
  },

  create: async (data) => {
    const response = await api.post('/skills/', data);
    return response.data;
  },

  update: async (id, data) => {
    const response = await api.put(`/skills/${id}/`, data);
    return response.data;
  },

  delete: async (id) => {
    await api.delete(`/skills/${id}/`);
  },
};