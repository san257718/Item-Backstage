export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">系統設定</h3>
          <p className=" text-gray-600">管理系統各項設定和安全配置</p>
        </div>
      </div>

      <div className="rounded-lg bg-card text-card-foreground border-0 shadow-md">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3>權限管理</h3>
          <p className=" text-gray-600">管理系統角色和權限設定</p>
        </div>

        <div className="pt-0 p-6">
          <div className="border rounded-lg p-4 bg-gray-200/50 border-gray-200">
            <h3 className="text-lg font-medium mb-4">添加新權限角色</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm">角色名稱</label>
                <input placeholder="請輸入角色名稱" className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm border-gray-200 focus:border-black focus:border-2 bg-white" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm">角色描述</label>
                <input placeholder="請輸入角色描述" className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm border-gray-200 focus:border-black focus:border-2 bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
