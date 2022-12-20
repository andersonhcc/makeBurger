import prismaClient from "../../prisma";

interface IEditProduct {
  product_id: string;
  quantity: number;
}

class EditItemService {
  async execute({ product_id, quantity } : IEditProduct){

    const item = await prismaClient.item.update({
      where:{
        id: product_id,
      },
      data: {
        amount: quantity,
      }
    })

    return item;
  }
}

export { EditItemService };