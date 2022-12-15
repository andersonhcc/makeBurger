import prismaClient from "../../prisma";

interface IDetailsOrder{
  order_id: string;
}

class DetailsOrderService {
  async execute({ order_id } : IDetailsOrder){

    const orders = await prismaClient.item.findMany({
      where: {
        order_id,
      },
      include:{
        product: true,
        order: true,
      }
    })

    return orders;

  }
}

export { DetailsOrderService };