/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigation, useRoute } from '@react-navigation/native';
import * as React from 'react';
import { Text, View } from 'react-native';
import { RouteNames } from 'common/constants';
import { ProfileStackScreenProp } from 'types/navigationTypes';

function ProfileScreen() {
  // navigation/route initializer with typed hooks
  const navigation =
    useNavigation<ProfileStackScreenProp<RouteNames.profile>['navigation']>();

  const route = useRoute<ProfileStackScreenProp<RouteNames.profile>['route']>();

  return (
    <View>
      <Text>Profile screen</Text>
    </View>
  );
}

export default ProfileScreen;
