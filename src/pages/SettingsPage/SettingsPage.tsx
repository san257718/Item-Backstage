import SearchIcon from '@mui/icons-material/Search';
import { Switch } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SettingsPageModel from './model';

export default function SettingsPage() {
  const [buttonGroup, setButtonGroup] = useState<boolean>(false);
  const [addOpen, setAddOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [roleData, setRoleData] = useState([
    {
      id: 1,
      name: '設定',
      description: '管理系統設定',
      status: false,
      list: [
        {
          id: 1,
          name: '儀錶板',
        },
        {
          id: 2,
          name: '庫存管理',
        },
        {
          id: 3,
          name: '人員管理',
        },
        {
          id: 4,
          name: '系統設置',
        },
      ],
    },
    {
      id: 2,
      name: '角色',
      description: '管理系統角色',
      status: false,
      list: [
        {
          id: 1,
          name: '儀錶板',
        },
        {
          id: 2,
          name: '庫存管理',
        },
      ],
    },
    {
      id: 3,
      name: '用戶',
      description: '管理系統用戶',
      status: false,
      list: [
        {
          id: 1,
          name: '儀錶板',
        },
        {
          id: 3,
          name: '人員管理',
        },
      ],
    },
  ]);

  // 權限角色切換
  const handleButtonGroup = (value: string) => {
    if (value === 'Role') {
      setButtonGroup(true);
    } else {
      setButtonGroup(false);
    }
  };

  // 權限角色狀態切換
  const handleRoleStatus = (value: number) => {
    const roleStatus = roleData.map((item) => {
      if (item.id === value) {
        return {
          ...item,
          status: !item.status,
        };
      }
      return item;
    });
    setRoleData(roleStatus);
  };

  // 新增或編輯
  const handleModalOpen = (value: string) => {
    if (value === 'add') {
      setAddOpen(!addOpen);
    } else {
      setEditOpen(!editOpen);
    }
  };

  // 關閉新增或編輯
  const headleModalClose = () => {
    setAddOpen(false);
    setEditOpen(false);
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

        <div className="pt-0 p-6">
          <div className="flex justify-between mb-6">
            <div className="relative flex-1 max-w-sm">
              <SearchIcon className="absolute left-3 top-2 text-gray-400" />
              <input
                placeholder="搜尋商品名稱或類別..."
                className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm pl-10 border-gray-200 focus:border-blue-500 focus:border-2"
              />
            </div>
            <Button sx={{ height: '40px' }} variant="contained" onClick={() => handleModalOpen('add')}>
              新增權限腳色
            </Button>
          </div>

          <div className="space-y-4">
            {roleData.map((item) => {
              return (
                <div
                  key={item.id}
                  className="rounded-lg border bg-card text-card-foreground shadow-sm border-l-4 border-l-blue-500 hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex justify-center items-center">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div>
                            <h4 className="font-semibold text-lg">{item.name}</h4>
                          </div>
                          <div
                            className={
                              item.status
                                ? 'bg-black text-white rounded-4xl text-xs font-semibold  py-1 px-3'
                                : 'bg-gray-200  rounded-4xl text-xs font-semibold py-1 px-3'
                            }
                          >
                            {item.status ? '啟用' : '停用'}
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-600 mb-3">{item.description}</p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {item.list.map((item) => {
                            return (
                              <div
                                key={item.id}
                                className="rounded-full border border-gray-300 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground flex items-center gap-1 px-3 py-1"
                              >
                                <p>{item.name}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Switch onChange={() => handleRoleStatus(item.id)} />
                        <button className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 font-medium text-sm border border-gray-400/70 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer" onClick={() => handleModalOpen('edit')}>
                          <EditCalendarOutlinedIcon sx={{ width: '1rem', height: '1rem' }} />
                        </button>
                        <button className="inline-flex items-center justify-center gap-2 px-3 py-2  border border-gray-400/70 rounded-lg hover:bg-blue-50 transition-colors text-red-600 cursor-pointer">
                          <DeleteOutlineOutlinedIcon sx={{ width: '1rem', height: '1rem' }} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <SettingsPageModel
        addOpen={addOpen}
        editOpen={editOpen}
        headleModalClose={headleModalClose}
      />
    </div>
  );
}
