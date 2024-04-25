import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

import { IButtonProps } from 'types/IButtonTypes';
import styles from './styles';

function Button({
  onPress,
  onLongPress,
  title,
  iconLeft,
  iconRight,
  style,
  textStyle,
  disabled,
  activeOpacity,
  loading,
}: IButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
      activeOpacity={activeOpacity}
      style={[disabled ? styles.disabledButton : styles.button, style]}
    >
      {iconLeft}
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      )}
      {iconRight}
    </TouchableOpacity>
  );
}

export default Button;
