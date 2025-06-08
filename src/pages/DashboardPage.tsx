export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">儀錶板</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">總庫存量</h2>
          <p className="text-3xl font-bold text-blue-600">1,234</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">本月入庫</h2>
          <p className="text-3xl font-bold text-green-600">123</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">本月出庫</h2>
          <p className="text-3xl font-bold text-red-600">89</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">待處理訂單</h2>
          <p className="text-3xl font-bold text-orange-600">15</p>
        </div>
      </div>
    </div>
  );
}
