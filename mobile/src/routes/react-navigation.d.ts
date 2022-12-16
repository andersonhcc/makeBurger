import type { SceneName } from './scene-name'


export type RootStackParamList = {
  [SceneName.SignIn] : undefined;
  [SceneName.Dashboard] : undefined;
  [SceneName.StartApp] : undefined;

}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

