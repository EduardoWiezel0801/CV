import api from './api';

export const personalInterestService = {
  getAll: async () => {
    const response = await api.get('/personal-interests/');
    return response.data.results || response.data || [];
  },
};
