import { Button } from '@mui/material';
import { useState } from 'react';
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
export default function ProductSettingsPage() {
  const [products, setProducts] = useState<ProductSettingsResponse[]>([
    {
      id: 1,
      name: '筆記型電腦',
      category: '筆記型電腦',
      description: '筆記型電腦',
      count: 3,
      operate: [],
    },

    {
      id: 2,
      name: '辦公椅',
      category: '辦公椅',
      description: '辦公椅',
      count: 10,
      operate: [],
    },

    {
      id: 3,
      name: '印表機',
      category: '印表機',
      description: '印表機',
      count: 11,
      operate: [],
    },
  ]);
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">商品庫存管理</h3>
          <p>管理所有庫存商品和庫存狀況</p>
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
            <Button variant="contained">
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
                {products.map((item) => (
                  <TableRow
                    key={item.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                   
                    <TableCell align="center">{item.category}</TableCell>
                    <TableCell align="center">{item.description}</TableCell>
                    <TableCell align="center">{item.count}</TableCell>
                    <TableCell align="center">
                      <div className="flex justify-center space-x-2">
                        <div className="flex items-center justify-center px-3 py-2 text-black border border-gray-200  rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                          <EditCalendarOutlinedIcon sx={{ width: '1rem', marginRight: '0.5rem' }} />
                          <button className="font-medium">編輯</button>
                        </div>

                        <div className="flex items-center justify-center px-3 py-2 text-black border border-red-600 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                          <DeleteOutlineOutlinedIcon
                            sx={{ width: '1rem', marginRight: '0.5rem' }}
                            color="error"
                          />
                          <button className="font-medium text-red-600">刪除</button>
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
