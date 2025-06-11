import DashboardIcon from '@mui/icons-material/Dashboard';
import StorageIcon from '@mui/icons-material/Storage';
import PersonIcon from '@mui/icons-material/Person';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import { useState } from 'react';
import SidebarInterface from '@/interface/sidebar';

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectOpen, setSelectOpen] = useState<boolean>(false);

  // 檢查當前路徑是否匹配
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // 跳展到其他頁面
  const headleButtonRouter = (string: string) => {
    navigate(string);
  };

  console.log(selectOpen);

  return (
    <div className="h-screen flex flex-col">
      <div className="flex items-center h-16 px-6 border-b border-gray-200 space-x-3 bg-white">
        <StorageIcon color="primary" sx={{ width: 32, height: 32 }} />
        <h1 className="text-xl font-bold">庫存系統</h1>
      </div>
      <div className="flex-1 px-4 py-6 space-y-2 bg-white">
        <button
          className={`flex items-center space-x-2 py-3 px-4 rounded-lg transition-colors w-full cursor-pointer ${
            isActive('/admin/dashboard') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
          }`}
          onClick={() => headleButtonRouter('/admin/dashboard')}
        >
          <DashboardIcon />
          <h5 className="text-sm font-medium">儀錶板</h5>
        </button>

        <div>
          <button
            className={`flex items-center space-x-2 py-3 px-4 rounded-lg transition-colors w-full cursor-pointer ${
              isActive('/admin/inventory/management')
                ? 'bg-blue-100 text-blue-600'
                : 'hover:bg-gray-100'
            }`}
            onClick={() => {
              headleButtonRouter('/admin/inventory/management');
            }}
          >
            <StorageIcon />
            <h5 className="text-sm font-medium">庫存管理</h5>
          </button>

          {isActive('/admin/inventory/management') && (
            <div className="">
              <div className="py-1">
                <button
                  className="block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                  onClick={() => headleButtonRouter('/admin/inventory/management')}
                >
                  商品名稱
                </button>
                <button
                  className="block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                  onClick={() => headleButtonRouter('/admin/inventory/order')}
                >
                  訂單
                </button>
                <button
                  className="block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                  onClick={() => headleButtonRouter('/admin/inventory/product-settings')}
                >
                  商品設定
                </button>
              </div>
            </div>
          )}
        </div>

        {/* <Link
          to="/admin/inventory/management"
          className={`flex items-center space-x-2 py-3 px-4 rounded-lg transition-colors w-full cursor-pointer ${
            isActive('/admin/inventory/management')
              ? 'bg-blue-100 text-blue-600'
              : 'hover:bg-gray-100'
          }`}
        >
          <AllInboxIcon />
          
          <h5 className="text-sm font-medium">商品管理</h5>
        </Link> */}

        <button
          className={`flex items-center space-x-2 py-3 px-4 rounded-lg transition-colors w-full cursor-pointer ${
            isActive('/admin/users') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
          }`}
          onClick={() => {
            headleButtonRouter('/admin/users');
          }}
        >
          <PersonIcon />
          <h5 className="text-sm font-medium">人員管理</h5>
        </button>
        <button
          className={`flex items-center space-x-2 py-3 px-4 rounded-lg transition-colors w-full cursor-pointer ${
            isActive('/admin/settings') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
          }`}
          onClick={() => {
            headleButtonRouter('/admin/settings');
          }}
        >
          <SettingsSuggestIcon />
          <h5 className="text-sm font-medium">系統設定</h5>
        </button>
      </div>
    </div>
  );
}
