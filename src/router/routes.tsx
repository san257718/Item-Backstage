import { RouteObject } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import InventoryPage from "../pages/InventoryPage";
import UsersPage from "../pages/UsersPage";
import SettingsPage from "../pages/SettingsPage";
import LoginPage from "../pages/LoginPage";
import MainLayout from "../layout/MainLayout";
import { Navigate, useLocation } from "react-router-dom";

// 檢查是否已登入
const isAuthenticated = () =>
  localStorage.getItem("isAuthenticated") === "true";

// 受保護的路由元件
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return isAuthenticated() ? <>{children}</> : <Navigate to="/" replace />;
};

// 登入路由包裝組件
const LoginRoute = () => {
  if (isAuthenticated()) {
    return <Navigate to="/admin/dashboard" replace />;
  }
  return <LoginPage />;
};

// 登入路由
const authRoutes: RouteObject[] = [
  {
    path: "/",
    element: <LoginRoute />,
  },
];

// 後台路由
const dashboardRoutes: RouteObject[] = [
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "inventory",
        element: <InventoryPage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
];

// 通配符路由 - 處理所有未匹配的路徑
const fallbackRoutes: RouteObject[] = [
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];

// 合併所有路由
export const routes: RouteObject[] = [...authRoutes, ...dashboardRoutes, ...fallbackRoutes];

