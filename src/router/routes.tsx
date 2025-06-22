import { RouteObject } from 'react-router-dom';
import DashboardPage from '@/pages/DashboardPage/DashboardPage';
import InventoryPage from '@/pages/inventoryPage/InventoryPage';
import PeopleSettings from '@/pages/PeopleSettings/peopleSettings';
import SettingsPage from '@/pages/SettingsPage/SettingsPage';
import LoginPage from '@/pages/LoginPage';
import MainLayout from '@/layout/MainLayout';
import { Navigate } from 'react-router-dom';
import InventoryManagementPage from '@/pages/inventoryPage/management/managementPage';
import Order from '@/pages/inventoryPage/order/order';
import ProductSettingsPage from '@/pages/inventoryPage/product-settings/product-settings';
import UserSettings from '@/pages/SettingsPage/userSettings/UserSettings';
import RoleSettings from '@/pages/SettingsPage/roleSettings/RoleSettings';

// 檢查是否已登入
const isAuthenticated = () => localStorage.getItem('isAuthenticated') === 'true';

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
    path: '/',
    element: <LoginRoute />,
  },
];

// 後台路由
const dashboardRoutes: RouteObject[] = [
  {
    path: '/admin',
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
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: 'inventory',
        element: <InventoryPage />,
        children: [
          {
            index: true, // 預設顯示 management
            element: <Navigate to="/admin/inventory/management" replace />,
          },
          {
            path: 'management',
            element: <InventoryManagementPage />,
          },
          {
            path: 'order',
            element: <Order />,
          },
          {
            path: 'product-settings',
            element: <ProductSettingsPage />,
          },
        ],
      },
      {
        path: 'people-settings',
        element: <PeopleSettings />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
        children: [
          {
            index: true,
            element: <Navigate to="/admin/settings/role" replace />,
          },
          {
            path: 'role',
            element: <RoleSettings />,
          },
          {
            path: 'user-settings',
            element: <UserSettings />,
          },
        ],
      },
    ],
  },
];

// 通配符路由 - 處理所有未匹配的路徑
const fallbackRoutes: RouteObject[] = [
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
];

// 合併所有路由
export const routes: RouteObject[] = [...authRoutes, ...dashboardRoutes, ...fallbackRoutes];
