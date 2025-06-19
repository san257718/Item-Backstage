import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
interface settingsPageModelProps {
  addOpen: boolean;
  editOpen: boolean;
  //   handleModalOpen: (value: string) => void;
  headleModalClose: () => void;
}

export default function SettingsPageModel({
  addOpen,
  editOpen,
  //   handleModalOpen,
  headleModalClose,
}: settingsPageModelProps) {
  const [formData, setFormData] = useState({
    roleName: '',
    roleDescription: '',
    modulePermission: [
      {
        id: 1,
        name: '儀錶板',
        status: false,
      },
      {
        id: 2,
        name: '庫存管理',
        status: false,
      },
      {
        id: 3,
        name: '人員管理',
        status: false,
      },
      {
        id: 4,
        name: '系統設定',
        status: false,
      },
    ],
  });

  const handlemodulePermission = (value: string) => {
    const modulePermission = formData.modulePermission.map((item) => {
      if (item.name === value) {
        return {
          ...item,
          status: !item.status,
        };
      }
      return item;
    });
    setFormData((prevData) => ({
      ...prevData,
      modulePermission: modulePermission,
    }));
  };

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
  console.log(formData);
  return (
    <div>
      {addOpen || editOpen ? (
        <div className="fixed inset-0 bg-black/50  flex items-center justify-center p-4 z-50">
          <div className="rounded-lg shadow-sm w-full max-w-md bg-white">
            <div className="flex flex-col space-y-1.5 p-6 gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold leading-none tracking-tight text-gray-800">
                    {/* 新增商品 */}
                    {addOpen ? '新增權限角色' : '編輯權限角色'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {addOpen ? '建立新的權限角色並設定模組權限' : '修改現有權限角色的設定'}
                  </p>
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

              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  角色名稱
                </label>
                <input
                  className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm border-gray-200 focus:border-black focus:border-2"
                  placeholder="請輸入角色名稱"
                  id="roleName"
                  name="roleName" // 添加 name 屬性以便識別
                  onChange={handleInputChange}
                />

                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  角色描述
                </label>
                <input
                  className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm border-gray-200 focus:border-black focus:border-2"
                  placeholder="請輸入角色描述"
                  id="roleDescription"
                  name="roleDescription" // 添加 name 屬性以便識別
                  onChange={handleInputChange}
                />

                <div>
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    模組權限
                  </label>
                  <div
                    className="
                        flex flex-wrap gap-2 mt-2"
                  >
                    {formData.modulePermission.map((item) => {
                      return (
                        <div key={item.id}>
                          <button
                            className={
                              item.status
                                ? 'h-9 px-3 text-sm font-semibold text-white bg-black rounded-lg cursor-pointer'
                                : 'h-9 px-3 text-sm bg-gray-200 font-semibold rounded-lg cursor-pointer'
                            }
                            type="button"
                            onClick={() => handlemodulePermission(item.name)}
                          >
                            {item.name}
                          </button>
                        </div>
                      );
                    })}
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
