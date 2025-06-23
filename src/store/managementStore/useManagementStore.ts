import { menagementPageResponse } from '@/interface/response/inventoryPage/menagementPage';
import { create } from 'zustand';

interface Management {
  displayedProducts: menagementPageResponse[];
  products: menagementPageResponse[];
  headleDelete: (value: number) => void;
  handleInputChange: (value: string) => void;
}

const initialProducts: menagementPageResponse[] = [
  {
    id: 1,
    name: '筆記型電腦',
    category: '電子產品',
    quantity: 15,
    unitPrice: 25000,
    supplier: '科技公司A',
    status: '庫存充足',
  },
  {
    id: 2,
    name: '辦公椅',
    category: '家具',
    quantity: 3,
    unitPrice: 3500,
    supplier: '家具公司B',
    status: '庫存吃緊',
  },
  {
    id: 3,
    name: '印表機',
    category: '電子產品',
    quantity: 0,
    unitPrice: 8000,
    supplier: '科技公司C',
    status: '缺貨',
  },
];

interface Management {
  products: menagementPageResponse[];
}

const useManagement = create<Management>((set) => ({
  displayedProducts: initialProducts,
  products: initialProducts,

  // 刪除
  headleDelete: (value: number) => {
    set((state) => {
      const newProducts = state.products.filter((item) => item.id !== value);
      console.log(newProducts);
      return { products: newProducts, displayedProducts: newProducts };
    });
  },

  // 搜尋商品
  handleInputChange: (value: string) => {
    set((state) => {
      const filteredProducts = state.products.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      return { displayedProducts: filteredProducts };
    });
  },
}));

export default useManagement;
