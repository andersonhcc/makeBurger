import prismaClient from "../../prisma";

interface IRemoveItem{
  item_id: string;
}

class RemoveItemService {
  async execute({ item_id } : IRemoveItem ){

    const removeItem = await prismaClient.item.delete({
      where:{
        id: item_id,
      }
    })

    return removeItem;

  }
}

export { RemoveItemService };