import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { menagementPageResponse } from '@/interface/response/inventoryPage/menagementPage';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import ManagementPageModel from './model';

export default function InventoryManagementPage() {
  const [addOpen, setAddOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<menagementPageResponse[]>([
    {
      id: 1,
      name: '筆記型電腦',
      category: '電子產品',
      quantity: 15,
      unitPrice: 25000,
      supplier: '科技公司A',
      status: '庫存充足',
    },
    {
      id: 2,
      name: '辦公椅',
      category: '家具',
      quantity: 3,
      unitPrice: 3500,
      supplier: '家具公司B',
      status: '庫存吃緊',
    },
    {
      id: 3,
      name: '印表機',
      category: '電子產品',
      quantity: 0,
      unitPrice: 8000,
      supplier: '科技公司C',
      status: '缺貨',
    },
  ]);
  const [displayedProducts, setDisplayedProducts] = useState<menagementPageResponse[]>([]);

  useEffect(() => {
    setDisplayedProducts(products);
  }, [products]);

  // 取得狀態顏色
  const getStatusColor = (status: string): string => {
    switch (status) {
      case '庫存充足':
        return 'bg-green-100 text-green-800';
      case '庫存吃緊':
        return 'bg-yellow-100 text-yellow-800';
      case '缺貨':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
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
    setProducts(products.filter((item) => item.id !== value));
  };

  // 搜尋商品
  const handleInputChange = (value: string) => {
    const filteredProducts = products.filter((item) => item.name.includes(value));
    setDisplayedProducts(filteredProducts);
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
          <p>共 {products.length} 件商品，篩選結果 3 件</p>
        </div>

        <div className="pt-0 p-6">
          <div className="mb-6">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-2 text-gray-400" />
              <input
                type="text"
                placeholder="搜尋商品名稱或類別..."
                // value={searchValue}
                className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm pl-10 border-gray-200 focus:border-blue-500 focus:border-2"
                onChange={(e) => handleInputChange(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedProducts.map((item) => {
              return (
                <div key={item.id} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status.toLowerCase())}`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-1">{item.category}</div>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">數量:</span>
                      <span className="font-medium">{item.quantity} 件</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">單價:</span>
                      <span className="font-medium">NT$ {item.unitPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">供應商:</span>
                      <span className="font-medium">{item.supplier}</span>
                    </div>
                  </div>

                  <div className="space-x-2 flex">
                    <button
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 font-medium text-sm border border-gray-400/70 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
                      onClick={() => handleModalOpen('edit')}
                    >
                      <EditCalendarOutlinedIcon sx={{ width: '1rem', height: '1rem' }} />
                      編輯
                    </button>
                    <button
                      className="inline-flex items-center justify-center gap-2 px-3 py-2  border border-gray-400/70 rounded-lg hover:bg-blue-50 transition-colors text-red-600 cursor-pointer"
                      onClick={() => headleDelete(item.id)}
                    >
                      <DeleteOutlineOutlinedIcon />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ManagementPageModel
        addOpen={addOpen}
        editOpen={editOpen}
        handleModalOpen={() => handleModalOpen('add')}
        headleModalClose={() => headleModalClose()}
      />
    </div>
  );
}
