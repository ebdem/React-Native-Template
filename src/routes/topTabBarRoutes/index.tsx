import {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';

import { RouteConfig, StackNavigationState } from '@react-navigation/native';
import { TopTabBarOptionByRouteName } from 'helpers/topTabBar/tabbarOptions';
import { RouteNames } from 'common/constants';
import HomeStack from 'navigations/stacks/home';
import ProfileStack from 'navigations/stacks/profile';
import { TopTabParamList } from 'types/navigationTypes';

export const TopTabBarRoutes: Array<
  RouteConfig<
    TopTabParamList,
    keyof TopTabParamList,
    StackNavigationState<TopTabParamList>,
    MaterialTopTabNavigationOptions,
    MaterialTopTabNavigationEventMap
  >
> = [
  {
    options: TopTabBarOptionByRouteName[RouteNames.homeStack],
    name: RouteNames.homeStack,
    component: HomeStack,
  },
  {
    options: TopTabBarOptionByRouteName[RouteNames.profileStack],
    name: RouteNames.profileStack,
    component: ProfileStack,
  },
];
