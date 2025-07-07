import { createUser } from '@/api/login';
import { LoginIFormInputRequest } from '@/interface/request/LoginPage';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  FormHelperText, // 用於顯示錯誤訊息
  SelectChangeEvent,
} from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

interface LoginModelProps {
  addOpen: boolean;
  headleModalClose: () => void;
}
export default function LoginModel({ addOpen, headleModalClose }: LoginModelProps) {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    // defaultValues 會在組件第一次渲染時設定
    // 當 formData 變化時，useEffect 會觸發 reset
    defaultValues: {
      name: '',
      password: '',
      email: '',
      status: '',
    },
  });

  // 內部提交處理函數，它會呼叫父層傳入的 onSubmit
  const handleInternalSubmit: SubmitHandler<LoginIFormInputRequest> = async (data) => {
    // console.log('子層表單提交的資料:', data); // 可以用於調試
    // console.log(data);
    try {
      const response = await createUser(data.email, data.password);
      console.log(response);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {addOpen && (
        <div className="fixed inset-0 bg-black/50  flex items-center justify-center p-4 z-50">
          <div className="rounded-lg shadow-sm w-full max-w-md bg-white">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold leading-none tracking-tight text-gray-800">
                    新增帳號
                  </h3>
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
              <form className="space-y-4" onSubmit={handleSubmit(handleInternalSubmit)}>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">姓名</label>

                  <Controller
                    name="name"
                    control={control}
                    rules={{ required: '姓名為必填' }} // 驗證規則
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        size="small"
                        placeholder="請輸入帳號"
                        error={!!errors.name} // 根據錯誤狀態顯示紅色邊框
                        helperText={errors.name?.message} // 顯示錯誤訊息
                        variant="standard"
                      />
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">密碼</label>
                  <Controller
                    name="password"
                    control={control}
                    rules={{ required: '密碼為必填' }} // 驗證規則
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        size="small"
                        placeholder="請輸入密碼"
                        error={!!errors.password} // 根據錯誤狀態顯示紅色邊框
                        helperText={errors.password?.message} // 顯示錯誤訊息
                        variant="standard"
                      />
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">電子郵件</label>

                  <Controller
                    name="email"
                    control={control}
                    rules={{ required: '電子郵件為必填' }} // 驗證規則
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        size="small"
                        placeholder="請輸入電子郵件"
                        error={!!errors.email} // 根據錯誤狀態顯示紅色邊框
                        helperText={errors.email?.message} // 顯示錯誤訊息
                        variant="standard"
                      />
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <Box>
                    <FormControl fullWidth size="small" error={!!errors.status}>
                      <InputLabel id="stock-label">角色</InputLabel>
                      <Controller
                        name="status"
                        control={control}
                        rules={{ required: '請選擇角色狀態' }}
                        render={({ field }) => (
                          <Select
                            {...field}
                            labelId="stock-label"
                            id="stock-select"
                            label="庫存狀態"
                          >
                            <MenuItem value="10">員工</MenuItem>
                            <MenuItem value="20">經理</MenuItem>
                            <MenuItem value="30">管理員</MenuItem>
                          </Select>
                        )}
                      />
                      {errors.status && (
                        <FormHelperText sx={{ marginLeft: 0 }}>
                          {errors.status.message}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Box>
                </div>

                <div className="space-y-2">
                  <div className="flex space-x-2 gap-2">
                    <Button className="flex-1" variant="outlined" onClick={headleModalClose}>
                      取消
                    </Button>
                    <Button className="flex-1" variant="contained" type={'submit'}>
                      創建帳號
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
