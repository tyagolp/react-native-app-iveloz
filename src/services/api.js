import axios from 'axios';

// adb reverse tcp:3333 tcp:3333
const api = axios.create({
  // baseURL: 'http://10.0.3.2:3333/',
  // baseURL: 'http://localhost:3333/',
  baseURL: 'http://177.125.27.78:3333/',
  /* headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
  }, */
});

export default api;
