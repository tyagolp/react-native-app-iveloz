import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.trendsis.com.br:3333/',
  timeout: 10000,
});

export default api;
