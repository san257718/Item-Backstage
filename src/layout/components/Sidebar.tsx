import DashboardIcon from '@mui/icons-material/Dashboard';
import StorageIcon from '@mui/icons-material/Storage';
import PersonIcon from '@mui/icons-material/Person';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // 清除登入狀態
    localStorage.removeItem('isAuthenticated');
    // 跳轉到登入頁
    navigate('/');
  };

  // 檢查當前路徑是否匹配
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex items-center h-16 px-6 border-b border-gray-200 border-r space-x-3">
        <StorageIcon color="primary" sx={{ width: 32, height: 32 }} />
        <h1 className="text-xl font-bold">庫存系統</h1>
      </div>
      <div className="flex-1 px-4 py-6 space-y-2">
        <Link
          to="/admin/dashboard"
          className={`flex items-center space-x-2 py-3 px-4 rounded-lg transition-colors ${
            isActive('/admin/dashboard') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
          }`}
        >
          <DashboardIcon />
          <h5 className="text-sm font-medium">儀錶板</h5>
        </Link>
        <Link
          to="/admin/inventory"
          className={`flex items-center space-x-2 py-3 px-4 rounded-lg transition-colors ${
            isActive('/admin/inventory') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
          }`}
        >
          <StorageIcon />
          <h5 className="text-sm font-medium">庫存管理</h5>
        </Link>
        <Link
          to="/admin/users"
          className={`flex items-center space-x-2 py-3 px-4 rounded-lg transition-colors ${
            isActive('/admin/users') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
          }`}
        >
          <PersonIcon />
          <h5 className="text-sm font-medium">人員管理</h5>
        </Link>
        <Link
          to="/admin/settings"
          className={`flex items-center space-x-2 py-3 px-4 rounded-lg transition-colors ${
            isActive('/admin/settings') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
          }`}
        >
          <SettingsSuggestIcon />
          <h5 className="text-sm font-medium">系統設定</h5>
        </Link>
      </div>
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="flex items-center space-x-2 w-full py-2 px-4 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
        >
          <LogoutIcon />
          <span className="text-sm font-medium">登出</span>
        </button>
      </div>
    </div>
  );
}
