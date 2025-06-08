import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="w-full min-h-screen flex">
      {/* 左侧边栏 */}
      <div className="flex flex-col w-64 border-r border-gray-200">
        <Sidebar />
      </div>

      {/* 右侧主要内容区域 */}
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
