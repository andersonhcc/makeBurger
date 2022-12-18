import type { SceneName } from './scene-name'

interface IOrder {
  orderNumber: string;
  order_id: string;
}

export type RootStackParamList = {
  [SceneName.SignIn] : undefined;
  [SceneName.Dashboard] : undefined;
  [SceneName.StartApp] : undefined;
  [SceneName.OrderDetails] : IOrder;
  [SceneName.FinishOrder] : {
    order_id: string;
    orderNumber: string;
  };



}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

