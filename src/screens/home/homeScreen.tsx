import * as React from 'react';
import { Text, View } from 'react-native';

import { useAppSelector, useAppDispatch } from 'hooks/state/useReduxHooks';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { decrement, increment } from 'store/features/counter/counterSlice';

import i18n from 'common/localization/i18n';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-native-paper';

function HomeScreen() {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  return (
    <View testID="WelcomeScreen">
      <Text testID="WelcomeScreenText">
        {t('hi')} to React Native! {count}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          padding: 10,
          borderRadius: 10,
          margin: 10,
        }}
        onPress={() => dispatch(increment())}
      >
        <Text>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(decrement())}>
        <Text>Decrement</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => i18n.changeLanguage('de')}>
        <Text>Change DE</Text>
      </TouchableOpacity>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => i18n.changeLanguage('en')}
      >
        EN
      </Button>
    </View>
  );
}

export default HomeScreen;
