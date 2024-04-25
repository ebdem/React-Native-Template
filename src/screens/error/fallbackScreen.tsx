import * as React from 'react';
import { View, Text, Button } from 'react-native';

interface Props {
  resetState: () => void;
}

function FallbackScreen({ resetState }: Props) {
  return (
    <View>
      <Text>Fallback screen</Text>
      <Button title="Go home" onPress={resetState} />
    </View>
  );
}

export default FallbackScreen;
