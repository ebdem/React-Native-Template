import 'react-native-gesture-handler';
import 'helpers/ignoreLogs';
import React, { useRef } from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';

import {
  QueryClient,
  QueryClientProvider,
  focusManager,
} from '@tanstack/react-query';

import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';

import { useAppState } from 'hooks/reactQuery/useAppState';
import { useOnlineManager } from 'hooks/reactQuery/useOnlineManager';

import 'common/localization/i18n';

import { Provider } from 'react-redux';

import RootNavigator from 'navigations/RootNavigation';
import { MainErrorBoundary } from 'screens/error';
import { AppSafeAreaProvider } from 'components/safeArea';

import { store } from 'store/store';

import {
  WorkSans_300Light as workSansLight,
  WorkSans_400Regular as workSansRegular,
  WorkSans_500Medium as workSansMedium,
  WorkSans_600SemiBold as workSansSemiBold,
  WorkSans_700Bold as workSansBold,
} from '@expo-google-fonts/work-sans';
import { AppStateStatus, Platform } from 'react-native';

function onAppStateChange(status: AppStateStatus) {
  // React Query already supports in web browser refetch on window focus by default
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

export default function App() {
  useOnlineManager();

  useAppState(onAppStateChange);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigationRef = useRef<NavigationContainerRef<any>>(null);

  const [fontsLoaded] = useFonts({
    workSansLight,
    workSansRegular,
    workSansMedium,
    workSansSemiBold,
    workSansBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppSafeAreaProvider>
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <MainErrorBoundary>
            <QueryClientProvider client={queryClient}>
              <NavigationContainer ref={navigationRef}>
                <RootNavigator />
              </NavigationContainer>
            </QueryClientProvider>
          </MainErrorBoundary>
        </PaperProvider>
      </Provider>
    </AppSafeAreaProvider>
  );
}
