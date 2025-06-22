import { create } from 'zustand';

interface Order {
  baser: number;
}

const useOrder = create<Order>((set) => ({
  baser: 0,
}));

export default useOrder;
