import { useState } from 'react';
import { OrderProduct } from '@/interface/response/inventoryPage/order';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { Divider } from '@mui/material';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Order() {
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<OrderProduct[]>([
    {
      id: 'LI-15830491',
      originaName: '筆記型電腦',
      name: '王小明',
      quantity: 0,
      totalAmount: 0,
      originData: '2022-11-01',
      status: 1,
      settings: [],
    },
    {
      id: 'CS-2124512341',
      originaName: '辦公椅',
      name: '張小明',
      quantity: 0,
      totalAmount: 0,
      originData: '2023-01-31',
      status: 1,
      settings: [],
    },
    {
      id: 'QW-31234253',
      originaName: '印表機',
      name: '李小明',
      quantity: 0,
      totalAmount: 0,
      originData: '2024-05-01',
      status: 1,
      settings: [],
    },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">商品庫存管理</h3>
          <p>管理所有庫存商品和庫存狀況</p>
        </div>
        <div>
          <Button variant="contained" onClick={() => setIsAddModalOpen(true)}>
            新增商品
          </Button>
        </div>
      </div>

      <div className="rounded-lg bg-card text-card-foreground border-0 shadow-md">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3>庫存列表</h3>
          <p>共 {products.length} 件商品，篩選結果 3 件</p>
        </div>

        <div className="pt-0 p-6">
          <div className="mb-6">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-2 text-gray-400" />
              <input
                placeholder="搜尋商品名稱或類別..."
                className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm pl-10 border-gray-200 focus:border-blue-500 focus:border-2"
              />
            </div>
          </div>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>訂單編號</TableCell>
                  <TableCell align="center">客戶名稱</TableCell>
                  <TableCell align="center">商品數量</TableCell>
                  <TableCell align="center">總金額</TableCell>
                  <TableCell align="center">狀態</TableCell>
                  <TableCell align="center">訂單日期</TableCell>
                  <TableCell align="center">操作</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((item) => (
                  <TableRow
                    key={item.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>{item.id}</TableCell>
                    <TableCell align="center">{item.name}</TableCell>
                    <TableCell align="center">{item.quantity}</TableCell>
                    <TableCell align="center">{item.totalAmount}</TableCell>
                    <TableCell align="center">{item.status}</TableCell>
                    <TableCell align="center">{item.originData}</TableCell>
                    <TableCell align="center">
                      <div className="flex justify-center space-x-2">
                        <div className="flex items-center justify-center px-3 py-2 text-black border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                          <RemoveRedEyeOutlinedIcon sx={{ width: '1rem', marginRight: '0.5rem' }} />
                          <button className="font-medium">查看</button>
                        </div>
                        <div className="flex items-center justify-center px-3 py-2 text-black border border-gray-200  rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                          <EditCalendarOutlinedIcon sx={{ width: '1rem', marginRight: '0.5rem' }} />
                          <button className="font-medium">操作</button>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
