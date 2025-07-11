import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import usePropleSettingStore from '@/store/managementStore/usePropleSettingStore';
import PropleSettingModel from './model';
import { useState } from 'react';
export default function PeopleSettings() {
  const [addOpen, setAddOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const { displayedProducts, products, headleDelete, handleInputChange } = usePropleSettingStore();

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
          <h3 className="text-xl font-semibold text-gray-800">人員管理</h3>
          <p className=" text-gray-600">管理所有員工資料和權限設定</p>
        </div>
        <Button variant="contained" onClick={() => handleModalOpen('add')}>
          新增員工
        </Button>
      </div>

      <div className="rounded-lg bg-card text-card-foreground border-0 shadow-md">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3>員工列表</h3>
          <p>
            共 {products.length} 位員工，篩選結果 {displayedProducts.length} 位
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedProducts.map((item) => {
              return (
                <div
                  key={item.id}
                  className="rounded-lg bg-card text-card-foreground shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="p-4">
                    <div className="flex items-start space-x-3 mb-10">
                      <div className="w-10 h-10 rounded-full bg-blue-300/50 flex justify-center items-center">
                        <PersonOutlineOutlinedIcon />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.email}</p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <p className="flex justify-between text-sm">部門: {item.position}</p>
                      <p className="flex justify-between text-sm">到職日: {item.arrival}</p>
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <PropleSettingModel
        addOpen={addOpen}
        editOpen={editOpen}
        handleModalOpen={() => handleModalOpen('add')}
        headleModalClose={() => headleModalClose()}
      />
    </div>
  );
}
