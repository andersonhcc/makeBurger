import type { SceneName } from './scene-name'

interface IOrder {
  orderNumber: string;
}

export type RootStackParamList = {
  [SceneName.SignIn] : undefined;
  [SceneName.Dashboard] : undefined;
  [SceneName.StartApp] : undefined;
  [SceneName.OrderDetails] : IOrder;


}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

