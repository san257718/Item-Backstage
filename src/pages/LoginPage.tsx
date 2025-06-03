import ShieldIcon from "@mui/icons-material/Shield";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";

export default function LoginPage() {
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
            <h3 className="tracking-tight font-bold text-2xl text-gray-800">
              庫存管理系統
            </h3>
            <p className="text-sm text-gray-600">請輸入您的帳號密碼登入系統</p>
          </div>
          <div className="flex flex-col space-y-4 p-6 pt-0">
            <div className="w-full flex justify-center items-center">
              <TextField
                id="username"
                label="user"
                variant="outlined"
                size="small"
                sx={{ width: "45ch" }}
                slotProps={{
                  input: {
                    startAdornment: <PersonIcon color="action" />,
                  },
                }}
              />
            </div>
            <div className="w-full flex justify-center">
              <TextField
                id="password"
                label="password"
                variant="outlined"
                size="small"
                sx={{ width: "45ch" }}
              />
            </div>
            <Button variant="contained">登入</Button>

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
