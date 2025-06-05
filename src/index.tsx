import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // 引入主要的 CSS 檔案
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from 'react';

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
