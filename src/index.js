import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css'; // 引入主要的 CSS 檔案

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);