import { userSettingsList } from '@/interface/response/inventoryPage/settingsPage';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Switch } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useEffect, useState } from 'react';
import UserSettingsPageModel from './model';
export default function UserSettings() {
  const [addOpen, setAddOpen] = useState<boolean>(false);
  const [userData, setUserData] = useState<userSettingsList[]>([
    {
      id: 1,
      email: 'zhang@company.com',
      permissionRoles: '系統管理員',
      department: 'IT部門',
      phone: '0912-345-678',
      time: '2023-01-15',
      name: '王小明',
      status: false,
    },
    {
      id: 2,
      email: 'li@company.com',
      permissionRoles: '庫存管理員',
      department: '倉儲部門',
      phone: '0987-654-321',
      time: '2023-03-20',
      name: '張小明',
      status: false,
    },
    {
      id: 3,
      email: 'wang@company.com',
      permissionRoles: '人員管理員',
      department: '人事部門',
      phone: '0955-123-456',
      time: '2023-02-10',
      name: '李小明',
      status: false,
    },
  ]);

  const [displayedUserData, setDisplayedUserData] = useState<userSettingsList[]>([]);

  useEffect(() => {
    setDisplayedUserData(userData);
  }, [userData]);

  // 新增
  const handleModalOpen = () => {
    setAddOpen(true);
  };
  // 關閉Model
  const headleModalClose = () => {
    setAddOpen(false);
  };

  // 用戶管理狀態切換
  const handleRoleStatus = (value: number) => {
    const roleStatus = userData.map((item) => {
      if (item.id === value) {
        return {
          ...item,
          status: !item.status,
        };
      }
      return item;
    });
    setUserData(roleStatus);
  };

  // 刪除
  const headleDelete = (value: number) => {
    setUserData(userData.filter((item) => item.id !== value));
  };

  // 搜尋權限角色
  const handleInputChange = (value: string) => {
    const filteredProducts = userData.filter((item) => item.name.includes(value));
    setDisplayedUserData(filteredProducts);
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
        <Button sx={{ height: '40px' }} variant="contained" onClick={handleModalOpen}>
          新增權限角色
        </Button>
      </div>

      <div>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">姓名</TableCell>
              <TableCell align="center">電子郵件</TableCell>
              <TableCell align="center">權限角色</TableCell>
              <TableCell align="center">部門</TableCell>
              <TableCell align="center">電話</TableCell>
              <TableCell align="center">加入日期</TableCell>
              <TableCell align="center">狀態</TableCell>
              <TableCell align="center">操作</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedUserData.map((item) => (
              <TableRow key={item.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center">{item.name}</TableCell>
                <TableCell align="center">{item.email}</TableCell>
                <TableCell align="center">{item.permissionRoles}</TableCell>
                <TableCell align="center">{item.department}</TableCell>
                <TableCell align="center">{item.phone}</TableCell>
                <TableCell align="center">{item.time}</TableCell>
                <TableCell align="center">
                  {item.status ? (
                    <p
                      className={
                        item.status
                          ? 'px-2 py-1 bg-black text-white rounded-xl'
                          : 'px-2 py-1 bg-gray-200 rounded-xl'
                      }
                    >
                      啟用
                    </p>
                  ) : (
                    <p
                      className={
                        item.status
                          ? 'px-2 py-1 bg-black text-white rounded-xl'
                          : 'px-2 py-1 bg-gray-200 rounded-xl'
                      }
                    >
                      停用
                    </p>
                  )}
                </TableCell>
                <TableCell align="center">
                  <div className="flex justify-center space-x-2">
                    <Switch onChange={() => handleRoleStatus(item.id)} />
                    <div
                      className="inline-flex items-center justify-center gap-2 px-3 py-2  border border-gray-400/70 rounded-lg hover:bg-blue-50 transition-colors text-red-600 cursor-pointer"
                      onClick={() => headleDelete(item.id)}
                    >
                      <DeleteOutlineOutlinedIcon sx={{ width: '1rem', height: '1rem' }} />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <UserSettingsPageModel
          addOpen={addOpen}
          handleModalOpen={handleModalOpen}
          headleModalClose={headleModalClose}
        />
      </div>
    </div>
  );
}
