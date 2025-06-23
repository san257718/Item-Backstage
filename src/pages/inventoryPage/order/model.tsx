import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddTable from './model-addTable';
import { OrderProduct } from '@/interface/response/inventoryPage/order';

interface OrderModelProps {
  addOpen: boolean;
  editOpen: boolean;
  lookOpen: boolean;
  headleModalClose: () => void;
}
export default function OrderModel({
  addOpen,
  editOpen,
  lookOpen,
  headleModalClose,
}: OrderModelProps) {
  return (
    <div>
      {addOpen || editOpen || lookOpen ? (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 ">
          <div className="rounded-lg shadow-sm w-full bg-white max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex flex-col space-y-1.5 p-6 gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold leading-none tracking-tight text-gray-800">
                    新增訂單
                  </h2>
                  <p className="text-gray-600 text-sm">建立新的客戶訂單</p>
                </div>
                <div className="">
                  <button
                    //   onClick={headleModalClose}
                    className="cursor-pointer w-10 h-10 hover:bg-gray-200 hover:rounded-md"
                  >
                    <CloseOutlinedIcon color={'action'} onClick={headleModalClose} />
                  </button>
                </div>
              </div>
              <form className="grid gap-6 py-4">
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        訂單編號
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm border-gray-200 focus:border-black focus:border-2"
                        placeholder="系統自動生成"
                        id="order-number"
                        name="order-number" // 添加 name 屬性以便識別
                        disabled={lookOpen && true}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        訂單編號
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm border-gray-200 focus:border-black focus:border-2"
                        placeholder="系統自動生成"
                        id="order-number"
                        name="order-number" // 添加 name 屬性以便識別
                        disabled={lookOpen && true}
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-gray-800">客戶資訊</h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        客戶名稱
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm border-gray-200 focus:border-black focus:border-2"
                        placeholder="請輸入客戶名稱"
                        id="order-number"
                        name="order-number" // 添加 name 屬性以便識別
                        disabled={lookOpen && true}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        客戶郵箱
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm border-gray-200 focus:border-black focus:border-2"
                        placeholder="請輸入客戶郵箱"
                        id="email"
                        name="email" // 添加 name 屬性以便識別
                        disabled={lookOpen && true}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        客戶電話
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm border-gray-200 focus:border-black focus:border-2"
                        placeholder="請輸入客戶電話"
                        id="phone"
                        name="phone" // 添加 name 屬性以便識別
                        disabled={lookOpen && true}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        訂單狀態
                      </label>

                      {lookOpen ? (
                        <div className="flex justify-center w-20">
                          <p className="py-1 bg-blue-200 text-blue-600 rounded-lg text-sm font-semibold mt-2 text-center w-full">
                            處理中
                          </p>
                        </div>
                      ) : (
                        <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                          <option>處理中</option>
                          <option>已出貨</option>
                          <option>已送達</option>
                        </select>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        配送地址
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm border-gray-200 focus:border-black focus:border-2"
                        placeholder="請輸入配送地址"
                        id="address"
                        name="address" // 添加 name 屬性以便識別
                        disabled={lookOpen && true}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-medium text-gray-800">訂單商品</h4>
                    <Button color="inherit" variant="contained">
                      新增商品
                    </Button>
                  </div>
                  {/* <div className="text-center py-8 text-gray-500">請新增訂單商品</div> */}

                  <AddTable />
                </div>

                <div className="border-t border-t-gray-200 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label>商品總數</label>
                      <div>0</div>
                    </div>
                    <div className="space-y-2">
                      <label>商品總數</label>
                      <div className="text-lg font-medium text-blue-600">NT $ 0</div>
                    </div>
                    <div className="space-y-2">
                      <label>商品總數</label>
                      <div>待處理</div>
                    </div>
                  </div>
                </div>

                <Stack
                  spacing={6}
                  direction="row"
                  sx={{ display: 'flex', justifyContent: 'center' }}
                >
                  <Button sx={{ width: '200px' }} variant="outlined" onClick={headleModalClose}>
                    取消
                  </Button>
                  <Button sx={{ width: '200px' }} variant="contained">
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
