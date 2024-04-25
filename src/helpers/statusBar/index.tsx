import * as React from 'react';
import { StatusBar, View, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ICustomStatusBarProps {
  backgroundColor: string;
  barStyle: 'light-content' | 'dark-content';
}

function CustomStatusBar({
  backgroundColor,
  barStyle = 'dark-content',
}: ICustomStatusBarProps) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        backgroundColor,
        height: Platform.OS === 'ios' ? 0 : insets.top,
      }}
    >
      <StatusBar
        animated
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
}

export default CustomStatusBar;
