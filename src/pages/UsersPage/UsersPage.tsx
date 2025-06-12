import SearchIcon from '@mui/icons-material/Search';
export default function UsersPage() {
  return (
    <div>
      <div className="flex flex-col space-y-1.5 p-6">
        <h3>庫存列表</h3>
        {/* <p>共 {products.length} 件商品，篩選結果 3 件</p> */}
      </div>

      <div className="pt-0 p-6">
        <div className="mb-6">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-2 text-gray-400" />
            <input
              placeholder="搜尋商品名稱或類別..."
              className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed outline-[0] disabled:opacity-50 md:text-sm pl-10 border-gray-200 focus:border-blue-500 focus:border-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
