import { MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';

import React from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { RouteNames } from 'common/constants';
import { TopTabParamList } from 'types/navigationTypes';

export const TopTabBarOptionByRouteName: Record<
  keyof TopTabParamList,
  MaterialTopTabNavigationOptions
> = {
  [RouteNames.homeStack]: {
    tabBarLabel: 'Home',
    tabBarIcon: props => <FontAwesome5 name="home" {...props} />,
  },
  [RouteNames.profileStack]: {
    tabBarLabel: 'Profile',
    tabBarIcon: props => <FontAwesome5 name="user" {...props} />,
  },
};
