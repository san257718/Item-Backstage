import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

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
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
