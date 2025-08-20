import { useEffect, useState } from 'react';
import dashboardData from '@/json/DashboardPage.json';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

export default function DashboardPage() {
  const [data, setData] = useState(dashboardData);

  // 根據 id 返回對應的圖標和顏色
  const getIconAndColor = (id: number) => {
    switch (id) {
      case 1:
        return {
          icon: <StorageRoundedIcon />,
          color: 'bg-blue-100',
        };
      case 2:
        return {
          icon: <TrendingUpIcon />,
          color: 'bg-green-100',
        };
      case 3:
        return {
          icon: <WarningAmberRoundedIcon sx={{ width: 32, height: 32 }} color="warning" />,
          color: 'bg-yellow-100',
        };
      case 4:
        return {
          icon: <WarningAmberRoundedIcon sx={{ width: 32, height: 32 }} color="error" />,
          color: 'bg-red-100',
        };
      case 5:
        return {
          icon: <PeopleAltOutlinedIcon />,
          color: 'bg-purple-100',
        };
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">商品庫存管理</h3>
          <p className=" text-gray-600">管理所有庫存商品和庫存狀況</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((item) => {
          return (
            <div key={item.id}>
              <div className="rounded-lg bg-card text-card-foreground border-0 shadow-md hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">{item.title}</p>
                      <p className="text-2xl font-bold text-gray-800">{item.amount}</p>
                      <p className="text-xs text-gray-500 mt-1">{item.content}</p>
                    </div>
                    <div
                      className={`${getIconAndColor(item.id)?.color} h-12 w-12 rounded-full flex items-center justify-center`}
                    >
                      <p>{getIconAndColor(item.id)?.icon}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
