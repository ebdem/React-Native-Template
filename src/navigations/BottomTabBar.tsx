import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from 'types/navigationTypes';
import { RouteNames } from 'common/constants';
import { BottomTabBarRoutes } from 'routes/bottomTabBarRoutes/tabbarRoutes';

const Tab = createBottomTabNavigator<BottomTabParamList>();

function TabBar() {
  return (
    <Tab.Navigator initialRouteName={RouteNames.homeStack}>
      {BottomTabBarRoutes.map(routeParams => (
        <Tab.Screen key={routeParams.name} {...routeParams} />
      ))}
    </Tab.Navigator>
  );
}

export default TabBar;
