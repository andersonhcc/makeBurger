import { IRequest } from "../../dtos/IRequest";

export interface Props {
  data: IRequest
  handleDeleteProduct: (item_id: string) => void;
}