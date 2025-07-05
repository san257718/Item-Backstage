import axios from 'axios';

const isProduction = process.env.NODE_ENV === 'production';
const baseURL = isProduction ? 'https://item-backstage-data.vercel.app/' : 'http://localhost:5000/'; // 請確保這是您本地後端實際運行的端口

export const jsonApi = axios.create({
  baseURL: baseURL, // 本地開發
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  timeout: 5000,
});

// 2. 添加請求攔截器來檢查 cookies 是否被發送
jsonApi.interceptors.request.use(
  (config) => {
    console.log('📋 請求前的 cookies:', document.cookie);

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 3. 添加響應攔截器來檢查回應
jsonApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.log('🔐 認證失敗，可能需要重新登入');
      // 可以選擇重導向到登入頁面或清除本地狀態
      localStorage.removeItem('token');

      // window.location.href = '/';
    }

    return Promise.reject(error);
  }
);

export default jsonApi;
