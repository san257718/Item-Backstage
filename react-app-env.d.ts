// src/react-app-env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly REACT_APP_DEV_API_KEY: string;
    readonly REACT_APP_PROD_API_KEY: string;
    // 添加其他你使用的 REACT_APP_ 開頭的環境變數
  }
}