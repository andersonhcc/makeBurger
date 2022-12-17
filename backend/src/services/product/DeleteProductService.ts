import prismaClient from "../../prisma";

interface Props {
  product_id: string;
}

class DeleteProductService {
  async execute({ product_id } : Props){

    const product = await prismaClient.product.delete({
      where:{
        id: product_id,
      }
    })

    return product;

  }
}

export { DeleteProductService }; 