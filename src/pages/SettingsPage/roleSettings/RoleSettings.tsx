import SearchIcon from '@mui/icons-material/Search';
import { Switch } from '@mui/material';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SettingsPageModel from './model';
import { settingsPageResponse } from '@/interface/response/inventoryPage/settingsPage';

export default function RoleSettings() {
  const [addOpen, setAddOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [roleData, setRoleData] = useState<settingsPageResponse[]>([
    {
      id: 1,
      name: '系統管理員',
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
      name: '庫存管理員',
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
      name: '人員管理員',
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

  const [displayedRoleData, setDisplayedRoleData] = useState<settingsPageResponse[]>([]);

  useEffect(() => {
    setDisplayedRoleData(roleData);
  }, [roleData]);

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

  // 刪除
  const headleDelete = (value: number) => {
    setRoleData(roleData.filter((item) => item.id !== value));
  };

  // 搜尋權限角色
  const handleInputChange = (value: string) => {
    const filteredProducts = roleData.filter((item) => item.name.includes(value));
    setDisplayedRoleData(filteredProducts);
  };

  return (
    <div className="pt-0 p-6">
      <div className="flex justify-between mb-6">
        <div className="relative flex-1 max-w-sm">
          <SearchIcon className="absolute left-3 top-2 text-gray-400" />
          <input
            placeholder="搜尋商品名稱或類別..."
            className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm pl-10 border-gray-200 focus:border-blue-500 focus:border-2"
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>
        <Button sx={{ height: '40px' }} variant="contained" onClick={() => handleModalOpen('add')}>
          新增權限腳色
        </Button>
      </div>

      <div className="space-y-4">
        {displayedRoleData.map((item) => {
          return (
            <div
              key={item.id}
              className="rounded-lg border border-gray-200 text-card-foreground shadow-sm border-l-4 border-l-blue-500 hover:shadow-md transition-shadow"
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
                    <button
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 font-medium text-sm border border-gray-400/70 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
                      onClick={() => handleModalOpen('edit')}
                    >
                      <EditCalendarOutlinedIcon sx={{ width: '1rem', height: '1rem' }} />
                    </button>
                    <button
                      className="inline-flex items-center justify-center gap-2 px-3 py-2  border border-gray-400/70 rounded-lg hover:bg-blue-50 transition-colors text-red-600 cursor-pointer"
                      onClick={() => headleDelete(item.id)}
                    >
                      <DeleteOutlineOutlinedIcon sx={{ width: '1rem', height: '1rem' }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <SettingsPageModel
        addOpen={addOpen}
        editOpen={editOpen}
        headleModalClose={headleModalClose}
      />
    </div>
  );
}
