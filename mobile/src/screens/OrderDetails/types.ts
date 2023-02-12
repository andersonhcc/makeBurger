export interface Props {
  orderNumber: string;
  order_id: string;
}

export interface ICategory {
  name: string;
  id: string;
}

export interface IProduct {
  name: string;
  id: string;
  description: string;
  banner: string;
  price: string | number;
}

export interface IProductSelected {
  name: string;
  id: string;
  description: string;
  price: string | number;
}

