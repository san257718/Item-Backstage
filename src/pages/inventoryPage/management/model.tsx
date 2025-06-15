import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
interface managementPageModalProps {
  open: boolean;
  handleModalOpen: () => void;
}

export default function ManagementPageModal({ open, handleModalOpen }: managementPageModalProps) {
  const [stock, setStock] = useState<{ id: number; name: string }[]>([
    { id: 1, name: '庫存充足' },
    { id: 2, name: '庫存不足' },
    { id: 3, name: '缺貨' },
  ]);
  return (
    <div>
      {open && (
        <div className="fixed inset-0 bg-black/50  flex items-center justify-center p-4 z-50">
          <div className="rounded-lg shadow-sm w-full max-w-md bg-white">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold leading-none tracking-tight text-gray-800">
                    新增商品
                  </h3>
                  <p className="text-gray-600 text-sm">新增庫存商品到系統</p>
                </div>
                <div className="">
                  <button
                    onClick={handleModalOpen}
                    className="cursor-pointer w-10 h-10 hover:bg-gray-200 hover:rounded-md"
                  >
                    <CloseOutlinedIcon color={'action'} />
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-0 p-6">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label>商品名稱</label>
                  <input
                    className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm border-gray-200 focus:border-black focus:border-2"
                    placeholder="請輸入商品名稱"
                  />
                </div>
                <div className="space-y-2">
                  <label>商品類別</label>
                  <input
                    className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm border-gray-200 focus:border-black focus:border-2"
                    placeholder="請輸入商品類別"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label>數量</label>
                    <input
                      className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm border-gray-200 focus:border-black focus:border-2 placeholder:text-black"
                      placeholder="0"
                    />
                  </div>
                  <div className="space-y-2">
                    <label>單價</label>
                    <input
                      className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm border-gray-200 focus:border-black focus:border-2 placeholder:text-black"
                      placeholder="0"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label>數量</label>
                  <input
                    className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm border-gray-200 focus:border-black focus:border-2 placeholder:text-black"
                    placeholder="0"
                  />
                </div>

                <Box>
                  <FormControl fullWidth>
                    <InputLabel id="stock">庫存狀態</InputLabel>
                    <Select
                      labelId="stock"
                      id="stock-select"
                      // value={age}
                      label="庫存狀態"
                      // onChange={handleChange}
                    >
                      {stock.map((itme) => {
                        return (
                          <MenuItem key={itme.id} value={itme.id}>
                            {itme.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Box>

                <Stack spacing={2} direction="row" sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Button sx={{ width: '100%'}} variant="outlined">取消</Button>
                  <Button sx={{ width: '100%'}} variant="contained">新增</Button>
                </Stack>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
