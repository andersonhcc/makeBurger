import prismaClient from "../../prisma";

interface ICreateProduct{
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}


class CreateProductService {
  async execute({ 
    name,
    banner,
    category_id,
    description,
    price,
  } : ICreateProduct){

    
    const product = await prismaClient.product.create({
      data:{
        name,
        banner,
        description,
        category_id,
        price,
      }
    })


    return product;

  }
}

export { CreateProductService };