export interface IButtonProps {
  onPress: () => void;
  onLongPress: () => void;
  title: string;
  iconLeft: string;
  iconRight: string;
  style: object;
  textStyle: object;
  disabled: boolean;
  activeOpacity: number;
  loading: boolean;
}
