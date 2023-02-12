
export interface IRequest {
  id: string;
  product_id: string;
  name: string;
  price: string | number;
  amount: string | number;
  description: string;
  acc: number;
}