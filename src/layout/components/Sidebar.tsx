import DashboardIcon from '@mui/icons-material/Dashboard';
import StorageIcon from '@mui/icons-material/Storage';
import PersonIcon from '@mui/icons-material/Person';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import { useLocation, useNavigate } from 'react-router-dom';
import MenuItem from '@/interface/sidebar';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems: MenuItem[] = [
    {
      id: 'dashboard',
      path: '/admin/dashboard',
      icon: DashboardIcon,
      label: '儀錶板',
      subItems: [],
    },
    {
      id: 'inventory',
      path: '/admin/inventory/management',
      icon: StorageIcon,
      label: '庫存管理',
      subItems: [
        { path: '/admin/inventory/management', label: '商品管理' },
        { path: '/admin/inventory/order', label: '訂單' },
        { path: '/admin/inventory/product-settings', label: '商品設定' },
      ],
    },
    {
      id: 'users',
      path: '/admin/users',
      icon: PersonIcon,
      label: '人員管理',
      subItems: [],
    },
    {
      id: 'settings',
      path: '/admin/settings',
      icon: SettingsSuggestIcon,
      label: '系統設定',
      subItems: [],
    },
  ];

  // 檢查當前路徑是否匹配
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // 跳展到其他頁面
  const handleButtonRouter = (string: string) => {
    navigate(string);
  };

  // 檢查是否有子項目處於活動狀態
  const hasActiveSubItem = (subItems: { path: string; label: string }[]) => {
    if (!subItems) return false;
    return subItems.some((subItem) => isActive(subItem.path));
  };

  // 檢查主項目是否應該被高亮（包括子項目活動狀態）
  const isMainItemActive = (item: MenuItem) => {
    return isActive(item.path) || hasActiveSubItem(item.subItems);
  };

  return (
    <div className="h-screen flex flex-col bg-white">
      <div className="flex items-center h-16 px-6 border-b border-gray-200 space-x-3 bg-white">
        <StorageIcon color="primary" sx={{ width: 32, height: 32 }} />
        <h1 className="text-xl font-bold">庫存系統</h1>
      </div>
      <div className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          return (
            <div key={item.id}>
              <button
                className={`flex justify-between items-center space-x-2 py-3 px-4 rounded-lg transition-colors w-full cursor-pointer ${
                  isMainItemActive(item) ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                }`}
                onClick={() => handleButtonRouter(item.path)}
              >
                <div className="flex items-center space-x-2">
                  <item.icon />
                  <h5 className="text-sm font-medium text-gray-600">{item.label}</h5>
                </div>
                {item.subItems.length > 0 && isMainItemActive(item) ? (
                  <KeyboardArrowUpOutlinedIcon
                    className={`${isMainItemActive(item) ? 'rotate-180' : ''} transition-transform`}
                  />
                ) : (
                  <div>
                    {item.subItems.length > 0 && (
                      <KeyboardArrowDownOutlinedIcon
                        className={`${
                          isMainItemActive(item) ? 'rotate-180' : ''
                        } transition-transform`}
                      />
                    )}
                  </div>
                )}
              </button>

              {hasActiveSubItem(item.subItems) && (
                <div className="py-1 border-blue-200">
                  {item.subItems?.map((subItem, index) => (
                    <button
                      key={index}
                      className={`block px-4 py-2 text-sm cursor-pointer w-full text-left transition-colors ${
                        isActive(subItem.path)
                          ? 'bg-blue-50 text-blue-600 font-medium rounded-lg'
                          : 'text-gray-700 hover:bg-gray-50 rounded-lg'
                      }`}
                      onClick={() => handleButtonRouter(subItem.path)}
                    >
                      {subItem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
