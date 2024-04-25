import {
  BottomTabNavigationEventMap,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { RouteConfig, StackNavigationState } from '@react-navigation/native';
import { BottomTabBarOptionByRouteName } from 'helpers/tabBar/tabbarOptions';
import { RouteNames } from 'common/constants';
import HomeStack from 'navigations/stacks/home';
import ProfileStack from 'navigations/stacks/profile';
import { BottomTabParamList } from 'types/navigationTypes';

export const BottomTabBarRoutes: Array<
  RouteConfig<
    BottomTabParamList,
    keyof BottomTabParamList,
    StackNavigationState<BottomTabParamList>,
    BottomTabNavigationOptions,
    BottomTabNavigationEventMap
  >
> = [
  {
    options: BottomTabBarOptionByRouteName[RouteNames.homeStack],
    name: RouteNames.homeStack,
    component: HomeStack,
  },
  {
    options: BottomTabBarOptionByRouteName[RouteNames.profileStack],
    name: RouteNames.profileStack,
    component: ProfileStack,
  },
];
