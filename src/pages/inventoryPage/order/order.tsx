import { useEffect, useState } from 'react';
import { OrderProduct } from '@/interface/response/inventoryPage/order';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import OrderModel from './model';
import useOrder from '@/store/managementStore/useOrderStore';

export default function Order() {
  const [addOpen, setAddOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [lookOpen, setLookOpen] = useState<boolean>(false);
  const { products, displayedProducts, handleInputChange } = useOrder();

  // 訂單狀態顏色
  const handleOrderStatus = (value: string) => {
    switch (value) {
      case '處理中':
        return 'py-1 rounded-full text-sm font-bold bg-blue-100 text-blue-700';
      case '已出貨':
        return 'py-1 rounded-full text-sm font-bold bg-yellow-100 text-yellow-700';
      case '已送達':
        return 'py-1 rounded-full text-sm font-bold bg-green-100 text-green-700';
    }
  };

  // 開啟model
  const handleModalOpen = (value: string) => {
    if (value === 'add') {
      setAddOpen(!addOpen);
    }

    if (value === 'edit') {
      setEditOpen(!editOpen);
    }

    if (value === 'look') {
      setLookOpen(!lookOpen);
    }
  };

  // 關閉新增商品
  const headleModalClose = () => {
    setAddOpen(false);
    setEditOpen(false);
    setLookOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">商品庫存管理</h3>
          <p className=" text-gray-600">管理所有庫存商品和庫存狀況</p>
        </div>
        <div>
          <Button variant="contained" onClick={() => handleModalOpen('add')}>
            新增商品
          </Button>
        </div>
      </div>

      <div className="rounded-lg bg-card text-card-foreground border-0 shadow-md">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3>庫存列表</h3>
          <p>
            共 {products.length} 件商品，篩選結果 {displayedProducts.length} 件
          </p>
        </div>

        <div className="pt-0 p-6">
          <div className="mb-6">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-2 text-gray-400" />
              <input
                placeholder="搜尋商品名稱或類別..."
                className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm pl-10 border-gray-200 focus:border-blue-500 focus:border-2"
                onChange={(e) => handleInputChange(e.target.value)}
              />
            </div>
          </div>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">訂單編號</TableCell>
                  <TableCell align="center">客戶名稱</TableCell>
                  <TableCell align="center">商品名稱</TableCell>
                  <TableCell align="center">商品數量</TableCell>
                  <TableCell align="center">單價</TableCell>
                  <TableCell align="center">總金額</TableCell>
                  <TableCell align="center">狀態</TableCell>
                  <TableCell align="center">訂單日期</TableCell>
                  <TableCell align="center">操作</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedProducts.map((item) => (
                  <TableRow
                    key={item.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center">{item.id}</TableCell>
                    <TableCell align="center">{item.name}</TableCell>
                    <TableCell align="center">{item.originaName}</TableCell>
                    <TableCell align="center">{item.quantity}</TableCell>
                    <TableCell align="center">{item.unitPrice}</TableCell>
                    <TableCell align="center">{item.totalAmount}</TableCell>
                    <TableCell align="center">
                      <p className={handleOrderStatus(item.status)}>{item.status}</p>
                    </TableCell>
                    <TableCell align="center">{item.originData}</TableCell>
                    <TableCell align="center">
                      <div className="flex justify-center space-x-2">
                        <button
                          className="flex items-center justify-center px-3 py-2 text-black border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
                          onClick={() => handleModalOpen('look')}
                        >
                          <RemoveRedEyeOutlinedIcon sx={{ width: '1rem', marginRight: '0.5rem' }} />
                          查看
                        </button>
                        <button
                          className="flex items-center justify-center px-3 py-2 text-black border border-gray-200  rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
                          onClick={() => handleModalOpen('edit')}
                        >
                          <EditCalendarOutlinedIcon sx={{ width: '1rem', marginRight: '0.5rem' }} />
                          編輯
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      <OrderModel
        addOpen={addOpen}
        editOpen={editOpen}
        lookOpen={lookOpen}
        headleModalClose={headleModalClose}
      />
    </div>
  );
}
