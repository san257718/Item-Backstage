import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { ProductSettingsResponse } from '@/interface/response/inventoryPage/product-settings';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useProductSetting from '@/store/managementStore/useProductSettingStore';
import ProductSettingsModel from './model';
export default function ProductSettingsPage() {
  const [addOpen, setAddOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const { products, headleDelete, handleInputChange, displayedProducts } = useProductSetting();

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
          <h3 className="text-xl font-semibold text-gray-800">商品庫存管理</h3>
          <p className=" text-gray-600">管理所有庫存商品和庫存狀況</p>
        </div>
      </div>

      <div className="rounded-lg bg-card text-card-foreground border-0 shadow-md">
        <div className="flex justify-between items-center p-6">
          <div>
            <h3 className="text-2xl font-semibold leading-none tracking-tight text-gray-800">
              商品類別管理
            </h3>
            <p className="text-sm text-gray-600">新增、編輯或刪除商品類別</p>
          </div>

          <div>
            <Button variant="contained" onClick={() => handleModalOpen('add')}>
              新增商品
            </Button>
          </div>
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
                  <TableCell align="center">類別名稱</TableCell>
                  <TableCell align="center">描述</TableCell>
                  <TableCell align="center">商品數量</TableCell>
                  <TableCell align="center">操作</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedProducts.map((item) => (
                  <TableRow
                    key={item.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center">{item.category}</TableCell>
                    <TableCell align="center">{item.description}</TableCell>
                    <TableCell align="center">{item.count}</TableCell>
                    <TableCell align="center">
                      <div className="flex justify-center space-x-2">
                        <button
                          className="flex items-center justify-center px-3 py-2 text-black border border-gray-200  rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
                          onClick={() => handleModalOpen('edit')}
                        >
                          <EditCalendarOutlinedIcon sx={{ width: '1rem', marginRight: '0.5rem' }} />
                          編輯
                        </button>

                        <button
                          className="flex items-center justify-center px-3 py-2 border border-red-600 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer font-medium text-red-600"
                          onClick={() => headleDelete(item.id)}
                        >
                          <DeleteOutlineOutlinedIcon
                            sx={{ width: '1rem', marginRight: '0.5rem' }}
                            color="error"
                          />
                          刪除
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
      <ProductSettingsModel
        addOpen={addOpen}
        editOpen={editOpen}
        headleModalClose={headleModalClose}
      />
    </div>
  );
}
