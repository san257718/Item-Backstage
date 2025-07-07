import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useEffect, useRef, useState } from 'react';
import useManagement from '@/store/managementStore/useManagementStore';
import { menagementIFormInputRequest } from '@/interface/request/menagementPage';
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
interface managementPageModalProps {
  formData: menagementIFormInputRequest;
  addOpen: boolean;
  editOpen: boolean;
  headleModalClose: () => void;
  onSubmit: (data: menagementIFormInputRequest) => void;
}

export default function ManagementPageModel({
  formData,
  addOpen,
  editOpen,
  headleModalClose,
  onSubmit,
}: managementPageModalProps) {
  const { selectProducts } = useManagement();
  const resetForm = useRef({
    productName: '',
    productCategory: '',
    quantity: 0,
    unitPrice: 0,
    supplier: '',
    stockId: '',
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<menagementIFormInputRequest>({
    // defaultValues 會在組件第一次渲染時設定
    // 當 formData 變化時，useEffect 會觸發 reset
    defaultValues: formData || resetForm,
  });

  useEffect(() => {
    // 只有當 formData 存在時才 reset，因為新增時可能為 null
    if (formData) {
      reset(formData);
    } else {
      // 新增模式時，重置為空表單
      reset({
        name: '',
        category: '',
        quantity: 0,
        unitPrice: 0,
        supplier: '',
        status: '',
      });
    }
  }, [formData, reset]);

  // 內部提交處理函數，它會呼叫父層傳入的 onSubmit
  const handleInternalSubmit: SubmitHandler<menagementIFormInputRequest> = (data) => {
    // console.log('子層表單提交的資料:', data); // 可以用於調試
    onSubmit(data); // 呼叫父層傳入的 onSubmit 函數
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
                  <p className="text-gray-600 text-sm">
                    {addOpen ? '新增庫存商品到系統' : '修改庫存商品資訊'}
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
            </div>

            <div className="pt-0 p-6">
              <form className="space-y-4" onSubmit={handleSubmit(handleInternalSubmit)}>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">商品名稱</label>

                  <Controller
                    name="name"
                    control={control}
                    rules={{ required: '商品名稱為必填' }} // 驗證規則
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        size="small"
                        placeholder="請輸入商品名稱"
                        error={!!errors.name} // 根據錯誤狀態顯示紅色邊框
                        helperText={errors.name?.message} // 顯示錯誤訊息
                        variant="standard"
                      />
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">商品類別</label>

                  <Controller
                    name="category"
                    control={control}
                    rules={{ required: '商品類別為必填' }} // 驗證規則
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        size="small"
                        placeholder="請輸入商品類別"
                        error={!!errors.category} // 根據錯誤狀態顯示紅色邊框
                        helperText={errors.category?.message} // 顯示錯誤訊息
                        variant="standard"
                      />
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">數量</label>
                    <Controller
                      name="quantity"
                      control={control}
                      rules={{ required: '商品類別為必填' }} // 驗證規則
                      render={({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          size="small"
                          placeholder="請輸入商品類別"
                          error={!!errors.quantity} // 根據錯誤狀態顯示紅色邊框
                          helperText={errors.quantity?.message} // 顯示錯誤訊息
                          variant="standard"
                        />
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">單價</label>
                    <Controller
                      name="unitPrice"
                      control={control}
                      rules={{ required: '商品類別為必填' }} // 驗證規則
                      render={({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          size="small"
                          placeholder="請輸入商品類別"
                          error={!!errors.unitPrice} // 根據錯誤狀態顯示紅色邊框
                          helperText={errors.unitPrice?.message} // 顯示錯誤訊息
                          variant="standard"
                        />
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">供應商</label>

                  <Controller
                    name="supplier"
                    control={control}
                    rules={{ required: '供應商為必填' }} // 驗證規則
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        size="small"
                        placeholder="請輸入商品類別"
                        error={!!errors.supplier} // 根據錯誤狀態顯示紅色邊框
                        helperText={errors.supplier?.message} // 顯示錯誤訊息
                        variant="standard"
                      />
                    )}
                  />
                </div>

                <Box>
                  <FormControl fullWidth size="small" error={!!errors.status}>
                    <InputLabel id="stock-label">庫存狀態</InputLabel>
                    <Controller
                      name="status"
                      control={control}
                      rules={{ required: '請選擇庫存狀態' }}
                      render={({ field }) => (
                        <Select {...field} labelId="stock-label" id="stock-select" label="庫存狀態">
                          {selectProducts.map((item) => (
                            <MenuItem key={item.id} value={item.id}>
                              {item.name}
                            </MenuItem>
                          ))}
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
