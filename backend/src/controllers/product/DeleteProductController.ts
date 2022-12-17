import { Response, Request } from "express";
import { DeleteProductService } from "../../services/product/DeleteProductService";

class DeleteProductContoller {
  async handle(req: Request, res: Response){

    const deleteProductServices = new DeleteProductService();
    
    const product_id = req.query.product_id as string; 

    const product = await deleteProductServices.execute({ product_id });

    return res.json({ product });



  }

}

export { DeleteProductContoller };