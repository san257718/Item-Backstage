import axios from 'axios';

const baseURL = process.env.REACT_APP_API_KEY || 'http://localhost:5000';
console.log('🌐 使用的 baseURL:', baseURL);

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
    console.log('📋 請求前 cookies:', document.cookie);
    return config;
  },
  (error) => Promise.reject(error)
);

jsonApi.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      console.log('🔐 認證失敗，清除 token');
      localStorage.removeItem('token');
    }
    return Promise.reject(error);
  }
);

export default jsonApi;
