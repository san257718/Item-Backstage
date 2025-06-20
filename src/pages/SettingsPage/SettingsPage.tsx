import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function SettingsPage() {
  const [buttonGroup, setButtonGroup] = useState<boolean>(true);
  const navigate = useNavigate();
  // 權限角色切換
  const handleButtonGroup = (value: string) => {
    if (value === 'Role') {
      setButtonGroup(true);
      navigate('/admin/settings/role');
    } else {
      setButtonGroup(false);
      navigate('/admin/settings/user-settings');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">系統設定</h3>
          <p className=" text-gray-600">管理系統各項設定和安全配置</p>
        </div>
      </div>

      <div className="rounded-lg bg-card text-card-foreground border-0 shadow-md">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3>權限管理</h3>
          <p className=" text-gray-600">管理系統角色和權限設定</p>

          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mt-4">
            <button
              className={
                buttonGroup
                  ? 'flex items-center gap-2 px-4 py-2 rounded-md transition-all bg-white text-blue-600 shadow-sm cursor-pointer'
                  : 'flex items-center gap-2 px-4 py-2 rounded-md transition-all text-gray-600 hover:text-gray-800 cursor-pointer'
              }
              onClick={() => handleButtonGroup('Role')}
            >
              權限腳色
            </button>
            <button
              className={
                buttonGroup
                  ? 'flex items-center gap-2 px-4 py-2 rounded-md transition-all text-gray-600 hover:text-gray-800 cursor-pointer'
                  : 'flex items-center gap-2 px-4 py-2 rounded-md transition-all bg-white text-blue-600 shadow-sm cursor-pointer'
              }
              onClick={() => handleButtonGroup('User')}
            >
              用戶管理
            </button>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
