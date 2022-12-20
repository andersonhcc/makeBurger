import { Response, Request } from "express";
import { EditItemService } from "../../services/order/EditItemService";

class EditItemController {
  async handle(req: Request, res: Response){
    
    const editItemService = new EditItemService();

    const { product_id, quantity } = req.body;


    const item = await editItemService.execute({ product_id, quantity });

    return res.json(item);
  }
}

export { EditItemController };