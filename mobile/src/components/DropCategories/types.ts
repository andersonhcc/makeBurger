import { ICategory } from "../../screens/OrderDetails/types";

export interface Props {
  categories: ICategory[];
  setVisibleDrop: () => void;
  setCategorySelected: (value: ICategory) => void;
}