import { create } from 'zustand';
import { ProductSettingsResponse } from '../../interface/response/inventoryPage/product-settings';
interface ProductSettings {
  displayedProducts: ProductSettingsResponse[];
  products: ProductSettingsResponse[];
  headleDelete: (value: number) => void;
  handleInputChange: (value: string) => void;
}

const initialProducts: ProductSettingsResponse[] = [
  {
    id: 1,
    name: '筆記型電腦',
    category: '筆記型電腦',
    description: '筆記型電腦',
    count: 3,
    operate: [],
  },
  {
    id: 2,
    name: '辦公椅',
    category: '辦公椅',
    description: '辦公椅',
    count: 10,
    operate: [],
  },
  {
    id: 3,
    name: '印表機',
    category: '印表機',
    description: '印表機',
    count: 11,
    operate: [],
  },
];

const useOrder = create<ProductSettings>((set) => ({
  displayedProducts: initialProducts,
  products: initialProducts,

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
          item.category.toLowerCase().includes(value.toLowerCase())
      );
      return { displayedProducts: filteredProducts };
    });
  },
}));

export default useOrder;
