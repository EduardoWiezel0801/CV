import axios from 'axios';

// Função para obter CSRF token dos cookies
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Interceptor para adicionar CSRF token
api.interceptors.request.use(
  async (config) => {
    // Para métodos que precisam de CSRF token
    if (['post', 'put', 'patch', 'delete'].includes(config.method)) {
      const csrfToken = getCookie('csrftoken');
      if (csrfToken) {
        config.headers['X-CSRFToken'] = csrfToken;
      } else {
        // Se não tiver token, busca do servidor
        try {
          const response = await axios.get(`${import.meta.env.VITE_API_URL}/csrf/`, {
            withCredentials: true
          });
          const token = response.data.csrfToken;
          if (token) {
            config.headers['X-CSRFToken'] = token;
          }
        } catch (error) {
          console.warn('Não foi possível obter CSRF token:', error);
        }
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default api;
