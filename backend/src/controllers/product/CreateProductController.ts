import { Response, Request } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, price, description, category_id } = req.body;


    const createCategoryService = new CreateProductService();

    if (!req.file) {
      throw new Error('error upload file');
    } else {
      const { originalname, filename: banner } = req.file;

      
      const product = await createCategoryService.execute({
        name,
        price,
        description,
        banner: 'http://192.168.1.19:3333/files/' + banner,
        category_id,
      });

      return res.json(product);
    }


  }
}

export { CreateProductController };

