import React, { FC } from 'react';
import {
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
  PressableProps,
} from 'react-native';
import AntDesign from '@react-native-vector-icons/ant-design';

type AntDesignIconName = React.ComponentProps<typeof AntDesign>['name'];

interface IconButtonProps extends PressableProps {
  iconName: AntDesignIconName;
  iconSize?: number;
  iconColor?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const 
IconButton: FC<IconButtonProps> = ({
  iconName,
  iconSize = 24,
  iconColor = '#000000',
  onPress,
  style,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        style,
        { opacity: pressed ? 0.5 : 1 },
      ]}
    >
      <AntDesign name={iconName} size={iconSize} color={iconColor} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IconButton;
