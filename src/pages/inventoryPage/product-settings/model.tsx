import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
interface ProductSettingsModelProps {
  addOpen: boolean;
  editOpen: boolean;
  headleModalClose: () => void;
}

export default function ProductSettingsModel({
  addOpen,
  editOpen,
  headleModalClose,
}: ProductSettingsModelProps) {
  // 1. 定義表單的狀態
  const [formData, setFormData] = useState({
    category: '',
    description: '',
  });

  // 2. 處理所有輸入欄位的變更
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 4. 處理表單提交
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 防止表單預設提交行為導致頁面刷新
    console.log('提交的表單資料:', formData);
  };

  return (
    <div>
      {addOpen || editOpen ? (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="rounded-lg shadow-sm w-full bg-white max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold leading-none tracking-tight">
                    {addOpen ? '新增類別' : '編輯類別'}
                  </h2>
                </div>
                <div>
                  <button
                    className="cursor-pointer w-10 h-10 hover:bg-gray-200 hover:rounded-md"
                    onClick={headleModalClose}
                  >
                    <CloseOutlinedIcon color={'action'} />
                  </button>
                </div>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    類別名稱 *
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm border-gray-200 focus:border-black focus:border-2"
                    placeholder="請輸入類別名稱"
                    id="category"
                    name="category" // 添加 name 屬性以便識別
                    value={formData.category}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    描述
                  </label>
                  <textarea
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-gray-200 focus:border-black focus:border-2"
                    placeholder="請輸入類別名稱"
                    id="description"
                    name="description" // 添加 name 屬性以便識別
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                </div>

                <Stack
                  spacing={3}
                  direction="row"
                  sx={{ display: 'flex', justifyContent: 'center' }}
                >
                  <Button sx={{ width: '200px' }} variant="outlined" onClick={headleModalClose}>
                    取消
                  </Button>
                  <Button sx={{ width: '200px' }} variant="contained" type={'submit'}>
                    新增
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
