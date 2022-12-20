import prismaClient from "../../prisma";

interface Props {
  order_id: string;
}

class DeteleteAllItemsService {
  async execute({ order_id } : Props){

    const deleteAllItems = await prismaClient.item.deleteMany({  
      where: {
       order_id: {
        contains: order_id,
       }
      }
    })

    return deleteAllItems;

  }
}

export { DeteleteAllItemsService }; 