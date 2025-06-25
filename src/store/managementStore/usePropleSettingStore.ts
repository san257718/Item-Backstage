import { create } from 'zustand';
import EmployeeManagementResponse from '../../interface/response/inventoryPage/employeeManagement';
interface PropleSetting {
  displayedProducts: EmployeeManagementResponse[];
  products: EmployeeManagementResponse[];
  headleDelete: (value: number) => void;
  handleInputChange: (value: string) => void;
}

const initialState: EmployeeManagementResponse[] = [
  {
    id: 1,
    name: '張三',
    email: 'zhangsan@gmail.com',
    arrival: '2021-01-01',
    department: '電子產品部',
    position: '前端工程師',
    isActive: true,
  },
  {
    id: 2,
    name: '李四',
    email: 'lisi@gmail.com',
    arrival: '2023-11-21',
    department: '電子產品部',
    position: '後端工程師',
    isActive: true,
  },
  {
    id: 3,
    name: '王五',
    email: 'wangwu@gmail.com',
    arrival: '2022-05-23',
    department: '印表機部',
    position: '後端工程師',
    isActive: true,
  },
];

const usePropleSettingStore = create<PropleSetting>((set) => ({
  displayedProducts: initialState,
  products: initialState,

  // 刪除
  headleDelete: (value: number) => {
    set((state) => {
      const newProducts = state.products.filter((item) => item.id !== value);
      return { products: newProducts, displayedProducts: newProducts };
    });
  },

  // 搜尋商品
  handleInputChange: (value: string) => {
    set((state) => {
      const filteredProducts = state.products.filter(
        (item) =>
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.email.toLowerCase().includes(value.toLowerCase()) ||
          item.department.toLowerCase().includes(value.toLowerCase())
      );
      return { displayedProducts: filteredProducts };
    });
  },
}));

export default usePropleSettingStore;
