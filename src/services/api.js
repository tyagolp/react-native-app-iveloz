import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.trendsis.com.br:3333/',
  // baseURL: 'http://localhost:3334/', // debug celular
  // baseURL: 'http://10.0.3.2:3334/', // debug emulador
});

export default api;
