// create material top tab navigator

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TopTabParamList } from 'types/navigationTypes';
import { RouteNames } from 'common/constants';
import { TopTabBarRoutes } from 'routes/topTabBarRoutes';

const Tab = createMaterialTopTabNavigator<TopTabParamList>();

function TopTabBar() {
  return (
    <Tab.Navigator initialRouteName={RouteNames.homeStack}>
      {TopTabBarRoutes.map(routeParams => (
        <Tab.Screen key={routeParams.name} {...routeParams} />
      ))}
    </Tab.Navigator>
  );
}

export default TopTabBar;
