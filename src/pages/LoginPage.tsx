'use client';

import ShieldIcon from '@mui/icons-material/Shield';
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/login';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    // // 簡單的登入驗證
    // if (username === 'admin@gmail.com' && password === 'admin123') {
    //   // 設置登入狀態
    //   localStorage.setItem('isAuthenticated', 'true');
    //   // 跳轉到後台首頁
    //   navigate('/admin/dashboard', { replace: true });
    // } else {
    //   setError('帳號或密碼錯誤');
    // }
    

    try {
      const response = await login(email, password);
      localStorage.setItem('token', response.data.token);
      navigate('/admin/dashboard', { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-full flex justify-center items-center">
      <div className="max-w-md w-full flex justify-center bg-[#fffc] rounded-lg shadow-xl">
        <div className="w-full">
          <div className="flex flex-col text-center space-y-4 p-6">
            <div className="flex justify-center items-center">
              <div className="w-16 h-16 bg-[#dbeafe] flex items-center justify-center rounded-full">
                <ShieldIcon fontSize="large" color="action" />
              </div>
            </div>
            <h3 className="tracking-tight font-bold text-2xl text-gray-800">庫存管理系統</h3>
            <p className="text-sm text-gray-600">請輸入您的帳號密碼登入系統</p>
          </div>
          <div className="flex flex-col space-y-4 p-6 pt-0">
            <div className="w-full flex justify-center items-center">
              <TextField
                id="email"
                label="email"
                variant="outlined"
                size="small"
                sx={{ width: '45ch' }}
                slotProps={{
                  input: {
                    startAdornment: <PersonIcon color="action" />,
                  },
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!error}
              />
            </div>
            <div className="w-full flex justify-center">
              <TextField
                id="password"
                label="password"
                type="password"
                variant="outlined"
                size="small"
                sx={{ width: '45ch' }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!error}
              />
            </div>
            <Button variant="contained" onClick={handleLogin}>
              登入
            </Button>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4>測試帳號</h4>
              <p>帳號: admin@gmail.com</p>
              <p>密碼: admin123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
