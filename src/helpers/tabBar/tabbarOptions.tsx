import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import React from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { RouteNames } from 'common/constants';
import { BottomTabParamList } from 'types/navigationTypes';

export const BottomTabBarOptionByRouteName: Record<
  keyof BottomTabParamList,
  BottomTabNavigationOptions
> = {
  [RouteNames.homeStack]: {
    tabBarLabel: 'Home',
    tabBarIcon: props => <FontAwesome5 name="home" {...props} />,
    headerTitle: 'Home',
  },
  [RouteNames.profileStack]: {
    tabBarLabel: 'Profile',
    tabBarIcon: props => <FontAwesome5 name="user" {...props} />,
  },
};
