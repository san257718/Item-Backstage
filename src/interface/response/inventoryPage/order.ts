export interface OrderProduct {
  id: string;
  originaName: string;
  name: string;
  quantity: number;
  totalAmount: number;
  unitPrice: number;
  originData: string;
  status: string;
  settings: string[];
}

export interface OrderTable {
  id: number;
  originaName: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
}
