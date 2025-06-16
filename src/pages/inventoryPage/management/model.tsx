import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
interface managementPageModalProps {
  addOpen: boolean;
  editOpen: boolean;
  handleModalOpen: (value: string) => void;
  headleModalClose: () => void;
}

export default function ManagementPageModel({ addOpen, editOpen, handleModalOpen, headleModalClose }: managementPageModalProps) {
  const [stock, setStock] = useState<{ id: string; name: string }[]>([
    { id: '1', name: '庫存充足' },
    { id: '2', name: '庫存不足' },
    { id: '3', name: '缺貨' },
  ]);
  const [stockId, setStockId] = useState('');

  // 1. 定義表單的狀態
  const [formData, setFormData] = useState({
    productName: '',
    productCategory: '',
    quantity: 0,
    unitPrice: 0,
    stockId: '', // 用於儲存選中的庫存狀態ID
  });

  // 2. 處理所有輸入欄位的變更
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 3. 處理 Select 下拉選單的變更
  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    setFormData((prevData) => ({
      ...prevData,
      stockId: e.target.value,
    }));
    stock.forEach((item) => item.id === e.target.value && setStockId(item.id));
  };

  // 4. 處理表單提交
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 防止表單預設提交行為導致頁面刷新
    console.log('提交的表單資料:', formData);
  };

  return (
    <div>
      {addOpen || editOpen ? (
        <div className="fixed inset-0 bg-black/50  flex items-center justify-center p-4 z-50">
          <div className="rounded-lg shadow-sm w-full max-w-md bg-white">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold leading-none tracking-tight text-gray-800">
                    {/* 新增商品 */}
                    {addOpen ? '新增商品' : '編輯商品'}
                  </h3>
                  <p className="text-gray-600 text-sm">{addOpen ? '新增庫存商品到系統' : '修改庫存商品資訊'}</p>
                </div>
                <div className="">
                  <button
                    onClick={headleModalClose}
                    className="cursor-pointer w-10 h-10 hover:bg-gray-200 hover:rounded-md"
                  >
                    <CloseOutlinedIcon color={'action'} />
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-0 p-6">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label>商品名稱</label>
                  <input
                    className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm border-gray-200 focus:border-black focus:border-2"
                    placeholder="請輸入商品名稱"
                    id="productName"
                    name="productName" // 添加 name 屬性以便識別
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <label>商品類別</label>
                  <input
                    className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm border-gray-200 focus:border-black focus:border-2"
                    placeholder="請輸入商品類別"
                    id="productCategory"
                    name="productCategory" // 添加 name 屬性以便識別
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label>數量</label>
                    <input
                      className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm border-gray-200 focus:border-black focus:border-2 placeholder:text-black"
                      placeholder="0"
                      id="quantity"
                      name="quantity" // 添加 name 屬性以便識別
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label>單價</label>
                    <input
                      className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm border-gray-200 focus:border-black focus:border-2 placeholder:text-black"
                      placeholder="0"
                      id="unitPrice"
                      name="unitPrice" // 添加 name 屬性以便識別
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label>數量</label>
                  <input
                    className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm border-gray-200 focus:border-black focus:border-2 placeholder:text-black"
                    placeholder="0"
                    id="quantity2"
                    name="quantity2"
                    type="number"
                    onChange={handleInputChange}
                  />
                </div>

                <Box>
                  <FormControl fullWidth>
                    <InputLabel id="stock">庫存狀態</InputLabel>
                    <Select
                      labelId="stock"
                      id="stock-select"
                      value={stockId}
                      label="庫存狀態"
                      onChange={handleSelectChange}
                    >
                      {stock.map((item) => {
                        return (
                          <MenuItem key={item.id} value={item.id}>
                            {item.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Box>

                <Stack
                  spacing={2}
                  direction="row"
                  sx={{ display: 'flex', justifyContent: 'center' }}
                >
                  <Button sx={{ width: '100%' }} variant="outlined" onClick={headleModalClose}>
                    取消
                  </Button>
                  <Button sx={{ width: '100%' }} variant="contained" type={'submit'} >
                    {addOpen ? '新增' : '修改'}
                  </Button>
                </Stack>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
