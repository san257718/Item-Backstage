import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers';

interface PropleSettingModelProps {
  addOpen: boolean;
  editOpen: boolean;
  handleModalOpen: (value: string) => void;
  headleModalClose: () => void;
}
export default function PropleSettingModel({
  addOpen,
  editOpen,
  handleModalOpen,
  headleModalClose,
}: PropleSettingModelProps) {
  return (
    <div>
      {addOpen || editOpen ? (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="rounded-lg shadow-sm w-full bg-white max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold leading-none tracking-tight">
                    {addOpen ? '新增員工' : '編輯員工'}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {addOpen ? '新增員工到系統' : '修改員工資料和權限'}
                  </p>
                </div>
                <button
                  className="cursor-pointer w-10 h-10 hover:bg-gray-200 hover:rounded-md"
                  onClick={headleModalClose}
                >
                  <CloseOutlinedIcon />
                </button>
              </div>
            </div>
            <div className="p-6 pt-0">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    姓名
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm border-gray-200 focus:border-blue-500 focus:border-2"
                    placeholder="請輸入員工姓名"
                    id="name"
                    name="name" // 添加 name 屬性以便識別
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    電子郵件
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm border-gray-200 focus:border-blue-500 focus:border-2"
                    placeholder="請輸入電子郵件"
                    id="email"
                    name="email" // 添加 name 屬性以便識別
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      職位權限
                    </label>
                    <Box>
                      <FormControl fullWidth size="small">
                        <Select label="職位權限" value={10}>
                          <MenuItem value={10}>管理員</MenuItem>
                          <MenuItem value={20}>經理</MenuItem>
                          <MenuItem value={30}>員工</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      狀態
                    </label>
                    <Box>
                      <FormControl fullWidth size="small">
                        <Select label="狀態" value={10}>
                          <MenuItem value={10}>在職</MenuItem>
                          <MenuItem value={20}>離職</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    部門
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm border-gray-200 focus:border-blue-500 focus:border-2"
                    placeholder="請輸入部門名稱"
                    id="department"
                    name="department" // 添加 name 屬性以便識別
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    到職日期
                  </label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateTimePicker']}>
                      <DatePicker format="YYYY/MM/DD" defaultValue={dayjs('2022-04-17')} />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
