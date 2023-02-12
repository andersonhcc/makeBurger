import { IProduct, IProductSelected } from "../../screens/OrderDetails/types";

export interface Props {
  product: IProduct[];
  setProductSelected: (value: IProductSelected) => void;
  setVisibleMenu: () => void;
}