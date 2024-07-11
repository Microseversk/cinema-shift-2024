import axios from 'axios';
import { API } from '../constants/api';

export const api = axios.create({
  baseURL: API.BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.localStorage.removeItem('token');
    }
    return error;
  },
);
