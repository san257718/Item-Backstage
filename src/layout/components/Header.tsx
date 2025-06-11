import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';

export default function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // 清除登入狀態
    localStorage.removeItem('isAuthenticated');
    // 跳轉到登入頁
    navigate('/');
  };

  return (
    <div className="flex h-16 bg-white border-b border-gray-200 items-center justify-between px-6">
      <h1 className="text-lg font-semibold text-gray-800">歡迎回來，管理員</h1>
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2 text-sm text-gray-600 items-center">
          <PersonIcon color="action" />
          <span>管理員</span>
        </div>

        <div>
          <Button variant="outlined" onClick={handleLogout}>
            <LogoutIcon />
            <span className="text-sm font-medium">登出</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
