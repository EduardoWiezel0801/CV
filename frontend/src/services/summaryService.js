import api from './api';

export const summaryService = {
  getAll: async () => {
    const response = await api.get('/summary/');
    return response.data.results || response.data || [];
  },
};
