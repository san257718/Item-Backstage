export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">系統設定</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">基本設定</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">系統名稱</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">系統描述</label>
                <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" rows={3}></textarea>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">通知設定</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                <label className="ml-2 block text-sm text-gray-900">啟用庫存不足提醒</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                <label className="ml-2 block text-sm text-gray-900">啟用訂單狀態通知</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 