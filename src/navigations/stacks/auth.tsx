import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RouteNames } from 'common/constants';
import { AuthStackParamList } from 'types/navigationTypes';
import authStackRoutes from 'routes/authRoutes';

const Stack = createStackNavigator<AuthStackParamList>();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={RouteNames.launch}
    >
      {authStackRoutes.map(routes => (
        <Stack.Screen key={routes.name} {...routes} />
      ))}
    </Stack.Navigator>
  );
}

export default AuthStack;
