import axios from 'axios';

const baseURL = process.env.REACT_APP_API_KEY || 'http://localhost:5000';
export const jsonApi = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  timeout: 5000,
});

jsonApi.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

export default jsonApi;
