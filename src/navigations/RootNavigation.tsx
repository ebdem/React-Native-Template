import * as React from 'react';
import AuthStack from './stacks/auth';
import AppBottomBar from './BottomTabBar';
import TopBar from './TopTabBar';

function RootNavigator() {
  const isAuthUser = true;
  const isBottomBar = true;

  if (!isAuthUser) {
    return <AuthStack />;
  }
  if (!isBottomBar) {
    return <TopBar />;
  }
  return <AppBottomBar />;
}

export default RootNavigator;
