import { Response, Request } from "express";

import { DeteleteAllItemsService } from "../../services/order/DeleteAllItemsService";

class DeleAllItemsController {
  async handle(req: Request, res: Response){
    const order_id = req.query.order_id as string;
    
    const deleteAllItemsService = new DeteleteAllItemsService();

    const deleteAll = await deleteAllItemsService.execute({ order_id });
    
    res.json({message: 'Deletado com sucesso'})

  }
}

export { DeleAllItemsController };