import { OrderProduct } from '@/interface/response/inventoryPage/order';
import { create } from 'zustand';

interface Order {
  displayedProducts: OrderProduct[];
  products: OrderProduct[];
  handleInputChange: (value: string) => void;
}

const initialProducts: OrderProduct[] = [
  {
    id: 'LI-15830491',
    originaName: '筆記型電腦',
    name: '王小明',
    quantity: 4,
    totalAmount: 400,
    unitPrice: 100,
    originData: '2022-11-01',
    status: '處理中',
    settings: [],
  },
  {
    id: 'CS-2124512341',
    originaName: '辦公椅',
    name: '張小明',
    quantity: 0,
    totalAmount: 0,
    unitPrice: 200,
    originData: '2023-01-31',
    status: '已出貨',
    settings: [],
  },
  {
    id: 'QW-31234253',
    originaName: '印表機',
    name: '李小明',
    quantity: 1,
    totalAmount: 300,
    unitPrice: 300,
    originData: '2024-05-01',
    status: '已送達',
    settings: [],
  },
];

const useOrder = create<Order>((set) => ({
  displayedProducts: initialProducts,
  products: initialProducts,

  // 搜尋商品
  handleInputChange: (value: string) => {
    set((state) => {
      const filteredProducts = state.products.filter(
        (item) =>
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.originaName.toLowerCase().includes(value.toLowerCase())
      );
      return { displayedProducts: filteredProducts };
    });
  },
}));

export default useOrder;
