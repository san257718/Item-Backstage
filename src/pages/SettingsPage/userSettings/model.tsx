import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

interface UserSettingsPageModelProps {
  addOpen: boolean;
  handleModalOpen: () => void;
  headleModalClose: () => void;
}

export default function UserSettingsPageModel({
  addOpen,
  handleModalOpen,
  headleModalClose,
}: UserSettingsPageModelProps) {
  const [formData, setFormData] = useState([]);

  // 處理表單提交
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 提交表單
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      {addOpen && (
        <div className="fixed inset-0 bg-black/50  flex items-center justify-center p-4 z-50">
          <div className="rounded-lg shadow-sm w-full max-w-md bg-white">
            <div className="flex flex-col space-y-1.5 p-6 gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold leading-none tracking-tight text-gray-800">
                    新增用戶
                  </h3>
                  <p className="text-gray-600 text-sm">建立新的用戶帳號</p>
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
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        姓名
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm border-gray-200 focus:border-black focus:border-2"
                        placeholder="請輸入姓名"
                        id="name"
                        name="name" // 添加 name 屬性以便識別
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        電子郵件
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm border-gray-200 focus:border-black focus:border-2"
                        placeholder="請輸入電子郵件"
                        id="email"
                        name="email" // 添加 name 屬性以便識別
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        權限角色
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm border-gray-200 focus:border-black focus:border-2"
                        placeholder="請輸入姓名"
                        id="role"
                        name="role" // 添加 name 屬性以便識別
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        部門
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm border-gray-200 focus:border-black focus:border-2"
                        placeholder="請輸入電子郵件"
                        id="department"
                        name="department" // 添加 name 屬性以便識別
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      電話
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm border-gray-200 focus:border-black focus:border-2"
                      placeholder="請輸入姓名"
                      id="phone"
                      name="phone" // 添加 name 屬性以便識別
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <Stack
                  spacing={2}
                  direction="row"
                  sx={{ display: 'flex', justifyContent: 'center' }}
                >
                  <Button sx={{ width: '100%' }} variant="outlined" onClick={headleModalClose}>
                    取消
                  </Button>
                  <Button sx={{ width: '100%' }} variant="contained" type={'submit'}>
                    新增
                  </Button>
                </Stack>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
